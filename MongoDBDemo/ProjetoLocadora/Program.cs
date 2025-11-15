using MongoDB.Driver;
using ProjetoLocadora.Models;
using Microsoft.AspNetCore.Mvc;
using ProjetoLocadora.Services; // usado para criação de aplicativos API

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
// para não dar conflito na hora de usar a porta do angular
builder.Services.AddCors(option => option.AddPolicy("AllowAngularApp", policy =>
{
    policy.WithOrigins("http://localhost:4200");
        policy.AllowAnyMethod();
        policy.AllowAnyHeader();
    }));

//tenta ler a variável do ambiente MONGO_CONNECTION_STRING que está no docker, caso não ache usa a string padrão
string connectionString = Environment.GetEnvironmentVariable("MONGO_CONNECTION_STRING") ?? "mongodb://127.0.0.1:27017";
string databaseName = "Projeto_Locadora";
string collectionName = "objeto";

// ensina a API a se conectar ao Mongo
builder.Services.AddSingleton<IMongoClient>(new MongoClient(connectionString));
builder.Services.AddScoped<IMongoDatabase>(sp =>
    sp.GetRequiredService<IMongoClient>().GetDatabase(databaseName));
builder.Services.AddScoped<IMongoCollection<ObjectModel>>(sp =>
    sp.GetRequiredService<IMongoDatabase>().GetCollection<ObjectModel>(collectionName));

builder.Services.AddScoped<LocadoraService>();

// nao altere
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowAngularApp"); 

// endpoint ConsultarElementos
app.MapGet("/api/elementos", async (LocadoraService service) =>
{
    //pega todos os elementos armazenados na db
    return Results.Ok(await service.ListarTodos());
});

// endpoint AdicionarElementos, FromBody preenche as propriedades de um corpo de uma solicitação http
app.MapPost("/api/elementos", async (ObjectModel modelo, LocadoraService service) =>
{   
    await service.Criar(modelo);
    return Results.Ok("Elemento adicionado com sucesso!");
});

//endpoint AtualizarElementos
app.MapPut("/api/elementos/{id}", async (string id, ObjectModel modelo, LocadoraService service) =>
{
    bool resultado = await service.Atualizar(id,  modelo);
    if (resultado)
    {
        return Results.Ok("Elemento modificado com sucesso!");
    }
    return Results.NotFound("O elemento não foi encontrado");
}) ;

// endpoint DeletarElemento
app.MapDelete("/api/elementos/{id}", async (string id, LocadoraService service) =>
    {
        bool resultado = await service.Deletar(id);
        if (resultado)
        {
            return Results.Ok("Elemento deletado com sucesso!");
        }
        return Results.NotFound("O elemento não foi encontrado");
    });

// endpoint AlugarElemento
app.MapPut("/api/elementos/{id}/alugar", async (string id, LocadoraService service) =>
    {
        bool resultado = await service.Alugar(id);
        if (resultado)
        {
            return Results.Ok("Elemento alugado com sucesso!");
        }
        return Results.NotFound("O elemento não foi encontrado, verifique o ID ou se ja foi alugado");

    });

// endpoint DevolverElemento
app.MapPut("/api/elementos/{id}/devolver",
    async (string id, LocadoraService service) =>
    {
        bool resultado =  await service.Devolver(id);
        if (resultado)
        {
            return Results.Ok("Elemento devolvido com sucesso!");
        }

        return Results.NotFound("O elemento não foi encontrado, verifique o ID ou se realmente está alugado");

    });

app.Run();


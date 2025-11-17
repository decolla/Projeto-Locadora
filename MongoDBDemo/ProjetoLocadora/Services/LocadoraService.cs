using MongoDB.Driver;
using ProjetoLocadora.Models;

namespace ProjetoLocadora.Services;

public class LocadoraService
{
    private readonly IMongoCollection<ObjectModel> _collection;

    public LocadoraService(IMongoDatabase database)
    {
        _collection = database.GetCollection<ObjectModel>("objeto");
    }

    public async Task<List<ObjectModel>> ListarTodos() => 
        await _collection.FindAsync(_ => true).Result.ToListAsync();

    public async Task Criar(ObjectModel novo) 
    {
        novo.Disponivel = true;
        await _collection.InsertOneAsync(novo);
    }
    
    public async Task<bool> Atualizar(string id, ObjectModel elemento){
        var filter = Builders<ObjectModel>.Filter.Eq(c => c.Id, id);

        var update = Builders<ObjectModel>.Update
            .Set(c => c.TipoObjeto, elemento.TipoObjeto)
            .Set(c => c.NomeObjeto, elemento.NomeObjeto)
            .Set(c => c.AutorObjeto, elemento.AutorObjeto)
            .Set(c => c.AnoObjeto, elemento.AnoObjeto);
        
        var resultado = await _collection.UpdateOneAsync(filter, update);

        return (resultado.ModifiedCount > 0);
    }

    public async Task<bool> Deletar(string id)
    {
        var filter = Builders<ObjectModel>.Filter.Eq(c => c.Id, id);
        
        var resultado = await _collection.DeleteOneAsync(filter);

        return resultado.DeletedCount > 0;
    }

    public async Task<bool> Alugar(string id)
    {
        var filter = Builders<ObjectModel>.Filter.And(Builders<ObjectModel>.Filter.Eq(c => c.Id, id),
            Builders<ObjectModel>.Filter.Eq(c => c.Disponivel, true));
        
        var update = Builders<ObjectModel>.Update.Set(c => c.Disponivel, false);
        var resultado = await _collection.UpdateOneAsync(filter, update);

        return resultado.ModifiedCount > 0;
    }

    public async Task<bool> Devolver(string id)
    {
        var filter = Builders<ObjectModel>.Filter.And(Builders<ObjectModel>.Filter.Eq(c => c.Id, id),
            Builders<ObjectModel>.Filter.Eq(c => c.Disponivel, false));
        
        var update = Builders<ObjectModel>.Update.Set(c => c.Disponivel, true);
        var resultado = await _collection.UpdateOneAsync(filter, update);

        return resultado.ModifiedCount > 0;

    }
    
}
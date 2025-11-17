# Etapa de Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copia o .csproj
COPY ["ProjetoLocadora.csproj", "./"]

RUN dotnet add package Microsoft.AspNetCore.OpenApi --version 8.0.5

# Restaura as dependências 
RUN dotnet restore "ProjetoLocadora.csproj"

# Copia o resto do código e faz o build
COPY . .
RUN dotnet publish "ProjetoLocadora.csproj" -c Release -o /app/publish

# Execução
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "ProjetoLocadora.dll"]

# Projeto Web de aplicação de um sistema de locadora full-stack

O projeto demonstra a integração de um back em C# com um banco de dados no MongoDB, e um front em Angular. O projeto todo está em container pelo Docker

## Visão Geral da Arquitetura

O sistema opera em comunicação do front com o back por meio de uma web API

1.  **Front:** Desenvolvido totalmente em Angular, dividindo o projeto em rotas e interfaces.
2.  **Back:** Feito totalmente em .NET em um projeto de API utilizando:
    * Banco de dados em BSON rodando de forma online no MongoDB
    * API em C# com interação por meio de maps com os dados em formato JSON
3.  **Containerização:** Feita em Docker, com documentos Docker para front e back, e um docker-compose para todo o projeto

## Tecnologias Utilizadas

* **Linguagem:** C#, HTML, CSS, TypeScirpt
* **Infraestrutura:** Docker & Docker Compose

## Pré-requisitos

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e rodando.
* [.NET SDK](https://dotnet.microsoft.com/download) instalado.
* [MongoDB]([url](https://www.mongodb.com/pt-br/docs/manual/installation)) instalado e rodando.
* [nginx]([url](https://nginx.org/en/docs/install.html)) instalado.

## Como Executar

### 1. Subir a Infraestrutura
Na raiz do projeto, execute o Docker Compose para iniciar a aplicação.

```bash
docker compose up -d
Aguarde alguns instantes até que todos os containers estejam com status healthy ou running.

2. Executar a Aplicação
Navegue até a pasta do projeto Angular e execute:

Bash

ng serve

3. Interagir com o Sistema

A aplicação poderá ser vizualizada em no localhost especificado quando o programa for inicado.

Destaques de Implementação

Adicionar e remover elementos

Buscar elementos

Consultar todos os elementos

modificar elementos

alugar ou devolver elementos 


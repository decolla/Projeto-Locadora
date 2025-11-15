using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ProjetoLocadora.Models;

public class ObjectModel
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public string TipoObjeto { get; set; }
    public string NomeObjeto { get; set; }
    public string AutorObjeto { get; set; }
    public string AnoObjeto { get; set; }
    public bool Disponivel { get; set; }

}
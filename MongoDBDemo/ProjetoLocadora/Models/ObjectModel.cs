using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;

namespace ProjetoLocadora.Models;

public class ObjectModel
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [Required(ErrorMessage = "O tipo é obrigatório")]
    public string? TipoObjeto { get; set; }

    [Required(ErrorMessage = "O nome é obrigatório")]
    [MinLength(3, ErrorMessage = "O nome deve ter pelo menos 3 letras")]
    public string? NomeObjeto { get; set; }

    [Required(ErrorMessage = "O autor é obrigatório")]
    public string? AutorObjeto { get; set; }

    [Range(1900, 2100, ErrorMessage = "O ano deve ser válido")]
    public string? AnoObjeto { get; set; } // idealmente seria int, mas string funciona

    public bool Disponivel { get; set; }

}
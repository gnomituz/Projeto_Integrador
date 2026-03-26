using System.Data.SqlTypes;

namespace Projeto_Integrador.DTO
{
    public class PacienteDTO
    {
        public string CPF { get; set; }
        public string Nome { get; set; }
        public bool Atendimento { get; set; }
        public int HospitalID {  get; set; }
    }
}

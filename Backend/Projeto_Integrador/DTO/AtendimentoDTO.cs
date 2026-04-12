using System.Data.SqlTypes;

namespace Projeto_Integrador.DTO
{
    public class AtendimentoDTO
    {
        public int ID { get; set; }
        public string PacienteCPF { get; set; }
        public string PacienteNome { get; set; }
        public string HospitalCNPJ { get; set; }
        public string HospitalNome { get; set; }
        public string EnderecoHospital { get; set; }
        public int QuantidadePacientes { get; set; }


    }
}

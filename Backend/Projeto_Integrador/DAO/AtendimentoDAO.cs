using Projeto_Integrador.DTO;
using MySql.Data.MySqlClient;


namespace Projeto_Integrador.DAO
{
    public class AtendimentoDAO
    {
        public List<AtendimentoDTO> EmAtendimento()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT \r\n    Atendimento.ID,\r\n    Paciente.CPF AS PacienteCPF,\r\n    Paciente.Nome AS Paciente,\r\n    Hospital.CNPJ AS HospitalCNPJ,\r\n    Hospital.Nome AS Hospital,\r\n    Hospital.Endereco\r\nFROM Atendimento\r\nINNER JOIN Paciente\r\n    ON Atendimento.PacienteCPF = Paciente.CPF\r\nINNER JOIN Hospital\r\n    ON Atendimento.HospitalCNPJ = Hospital.CNPJ;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var atendimentos = new List<AtendimentoDTO>();

            while (dataReader.Read())
            {
                var atendimento = new AtendimentoDTO();

                atendimento.ID = Convert.ToInt32(dataReader["ID"]);
                atendimento.PacienteCPF = dataReader["PacienteCPF"].ToString();
                atendimento.PacienteNome = dataReader["Paciente"].ToString();
                atendimento.HospitalCNPJ = dataReader["HospitalCNPJ"].ToString();
                atendimento.HospitalNome = dataReader["Hospital"].ToString();
                atendimento.EnderecoHospital = dataReader["Endereco"].ToString();

                atendimentos.Add(atendimento);
            }
            conexao.Close();

            return atendimentos;
        }

        public List<AtendimentoDTO> ListarHospital()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT \r\n  Hospital.CNPJ AS HospitalCNPJ,\r\n    Hospital.Nome AS Hospital,\r\n    Hospital.Endereco AS Endereco,\r\n    COUNT(Atendimento.PacienteCPF) AS QuantidadePacientes\r\nFROM Atendimento\r\nINNER JOIN Hospital \r\n    ON Atendimento.HospitalCNPJ = Hospital.CNPJ\r\nGROUP BY Hospital.CNPJ, Hospital.Nome, Hospital.Endereco;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var hospitais = new List<AtendimentoDTO>();

            while (dataReader.Read())
            {
                var hospital = new AtendimentoDTO();

                hospital.HospitalCNPJ = dataReader["HospitalCNPJ"].ToString();
                hospital.HospitalNome = dataReader["Hospital"].ToString();
                hospital.EnderecoHospital = dataReader["Endereco"].ToString();
                hospital.QuantidadePacientes = Convert.ToInt32(dataReader["QuantidadePacientes"]);

                hospitais.Add(hospital);
            }
            conexao.Close();

            return hospitais;

        }
    }
}

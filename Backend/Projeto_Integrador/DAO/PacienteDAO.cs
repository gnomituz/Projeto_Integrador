using Projeto_Integrador.DTO;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Mvc;


namespace Projeto_Integrador.DAO
{
    public class PacienteDAO
    {
        public List<PacienteDTO> Listar()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT*FROM Paciente";


            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var pacientes = new List<PacienteDTO>();

            while (dataReader.Read()) { 
                var paciente = new PacienteDTO();
                paciente.CPF = dataReader["CPF"].ToString();
                paciente.Nome = dataReader["Nome"].ToString();
                paciente.Atendimento = Convert.ToBoolean(dataReader["Atendimento"]);
                paciente.HospitalID = int.Parse(dataReader["HospitalID"].ToString());
                pacientes.Add(paciente);
            }

            conexao.Close();

            return pacientes;
        }

        public List<PacienteDTO> EmAtendimento()
        {
            var conexao = ConnectionFactory.Build();
            conexao.Open();

            var query = "SELECT * FROM Paciente WHERE Atendimento = 1;";

            var comando = new MySqlCommand(query, conexao);
            var dataReader = comando.ExecuteReader();

            var status = new List<PacienteDTO>();

            while (dataReader.Read())
            {
                var paciente = new PacienteDTO();
                paciente.CPF = dataReader["CPF"].ToString();
                paciente.Nome = dataReader["Nome"].ToString();
                paciente.Atendimento = Convert.ToBoolean(dataReader["Atendimento"]);
                paciente.HospitalID = int.Parse(dataReader["HospitalID"].ToString());
                status.Add(paciente);
            }

            conexao.Close();

            return status;

        }
    }
}

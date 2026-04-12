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
                pacientes.Add(paciente);
            }

            conexao.Close();

            return pacientes;
        }

    }
}

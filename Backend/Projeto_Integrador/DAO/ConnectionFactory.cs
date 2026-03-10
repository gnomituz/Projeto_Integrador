using MySql.Data.MySqlClient;

namespace Projeto_Integrador.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection Build()
        {
            return new MySqlConnection("Server=localhost;Database=ProjetoIntegrador;Uid=root;Pwd=root;");
        }

    }
}

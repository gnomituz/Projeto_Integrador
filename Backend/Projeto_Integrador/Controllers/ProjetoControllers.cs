using Projeto_Integrador.DAO;
using Microsoft.AspNetCore.Mvc;


namespace Projeto_Integrador.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        [HttpGet]
        public IActionResult Listar()
        {
            PacienteDAO dao = new PacienteDAO();
            var pacientes = dao.Listar();
            return Ok(pacientes);
        }

        [HttpGet, Route("atendimento")]
        public IActionResult EmAtendimento()
        {
            PacienteDAO dao = new PacienteDAO();
            var status = dao.EmAtendimento();
            return Ok(status);
        }
    }
}

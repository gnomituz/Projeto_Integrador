using Projeto_Integrador.DAO;
using Microsoft.AspNetCore.Mvc;


namespace Projeto_Integrador.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetoController : ControllerBase
    {
        [HttpGet, Route("Paciente")]
        public IActionResult Listar()
        {
            PacienteDAO dao = new PacienteDAO();
            var pacientes = dao.Listar();
            return Ok(pacientes);
        }

        [HttpGet, Route("Atendimento")]
        public IActionResult EmAtendimento()
        { 
            AtendimentoDAO dao = new AtendimentoDAO();
            var atendimentos = dao.EmAtendimento();
            return Ok(atendimentos);
        }

        [HttpGet, Route("Hospital")]
        public IActionResult ListarHospital()
        {
            AtendimentoDAO dao = new AtendimentoDAO();
            var hospitais = dao.ListarHospital();
            return Ok(hospitais);
        }

    }
}

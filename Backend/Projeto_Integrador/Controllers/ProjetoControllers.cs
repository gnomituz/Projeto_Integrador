using Microsoft.AspNetCore.Mvc;
using MySqlX.XDevAPI;
using Projeto_Integrador.DAO;
using Projeto_Integrador.DTO;


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

        [HttpDelete, Route("{id}")]
        public IActionResult DeletarAtendimento(int id)
        {
            AtendimentoDAO dao = new AtendimentoDAO();

            dao.DeletarAtendimento(new AtendimentoDTO
            {
                ID = id
            });

            if (id <= 0)
                return BadRequest("ID inválido");

            return Ok("Atendimento deletado com sucesso");
        }

        [HttpPost, Route("AdicionarAtendimento")]
        public IActionResult AdicionarAtendimento(AtendimentoDTO atendimento)
        {
            AtendimentoDAO dao = new AtendimentoDAO();
            dao.AdicionarAtendimento(atendimento);

            return Ok();
        }

        [HttpPost, Route("AdicionarPaciente")]
        public IActionResult AdicionarPaciente(PacienteDTO paciente)
        {
            PacienteDAO dao = new PacienteDAO();
            dao.AdicionarPaciente(paciente);

            return Ok();
        }

    }
}

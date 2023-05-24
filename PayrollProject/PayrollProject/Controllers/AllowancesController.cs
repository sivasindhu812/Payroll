using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PayrollProject.Data;
using PayrollProject.Models;

namespace PayrollProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllowancesController : ControllerBase
    {
        private readonly PayrollProjectContext _context;

        public AllowancesController(PayrollProjectContext context)
        {
            _context = context;
        }

        // GET: api/Allowances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Allowance>>> GetAllowance()
        {
            return await _context.Allowance.ToListAsync();
        }

        // GET: api/Allowances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Allowance>> GetAllowance(int id)
        {
            var allowance = await _context.Allowance.FindAsync(id);

            if (allowance == null)
            {
                return NotFound();
            }

            return allowance;
        }

        // PUT: api/Allowances/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAllowance(int id, Allowance allowance)
        {
            if (id != allowance.AllowanceId)
            {
                return BadRequest();
            }

            _context.Entry(allowance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AllowanceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Allowances
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Allowance>> PostAllowance(Allowance allowance)
        {
            _context.Allowance.Add(allowance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAllowance", new { id = allowance.AllowanceId }, allowance);
        }

        // DELETE: api/Allowances/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Allowance>> DeleteAllowance(int id)
        {
            var allowance = await _context.Allowance.FindAsync(id);
            if (allowance == null)
            {
                return NotFound();
            }

            _context.Allowance.Remove(allowance);
            await _context.SaveChangesAsync();

            return allowance;
        }

        private bool AllowanceExists(int id)
        {
            return _context.Allowance.Any(e => e.AllowanceId == id);
        }
    }
}

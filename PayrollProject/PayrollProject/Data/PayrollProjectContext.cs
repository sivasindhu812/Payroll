using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PayrollProject.Models;

namespace PayrollProject.Data
{
    public class PayrollProjectContext : DbContext
    {
        public PayrollProjectContext (DbContextOptions<PayrollProjectContext> options)
            : base(options)
        {
        }

        public DbSet<PayrollProject.Models.Admin> Admin { get; set; }

        public DbSet<PayrollProject.Models.Employee> Employee { get; set; }

        public DbSet<PayrollProject.Models.Leave> Leave { get; set; }

        public DbSet<PayrollProject.Models.Allowance> Allowance { get; set; }

        public DbSet<PayrollProject.Models.Salary> Salary { get; set; }
    }
}

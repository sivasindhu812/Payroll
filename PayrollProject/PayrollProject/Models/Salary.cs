using Microsoft.VisualBasic;
using System;
using System.ComponentModel.DataAnnotations;

namespace PayrollProject.Models
{
    public class Salary
    {
        [Key]
        public int SalaryId { get; set; }

        // Foreign key   
        [Required]
        public int EmployeeId { get; set; }

        [Required]
        public int BasicSalary { get; set; }

        [Required]
        public int HRA { get; set; }

        [Required]
        public int DA { get; set; }

        [Required]
        public int Tax { get; set; }

        [Required]
        public int NetSalary { get; set; }

        [Required]
        public int PF { get; set; }

        [Required]
        public string PayDate { get; set; }
    }
}

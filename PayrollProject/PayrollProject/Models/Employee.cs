using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace PayrollProject.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        [Required]
        public string EmployeeFirstName { get; set; }

        [Required]
        public string EmployeeLastName { get; set; }

        [Required]
        public string EmployeeEmail { get; set; }

        [Required]
        public string EmployeeMobile { get; set; }

        [Required]
        public string EmployeePassword { get; set; }

        [Required]
        public string EmployeeAddress { get; set; }

        [Required]
        public string EmployeeDOJ { get; set; }

        [Required]
        public string EmployeeSalary { get; set; }

        [Required]
        public string EmployeeDesignation { get; set; }

        // Foreign key   
        [Required]
        public int AdminId { get; set; }

        internal static Task<object> GetEmployee()
        {
            throw new NotImplementedException();
        }
    }
}

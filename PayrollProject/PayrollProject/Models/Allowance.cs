using System.ComponentModel.DataAnnotations;

namespace PayrollProject.Models
{
    public class Allowance
    {
        [Key]
        public int AllowanceId { get; set; }

        // Foreign key   
        [Required]
        public int EmployeeId { get; set; }

        [Required]
        public string AllowanceType { get; set; }

        [Required]
        public string AllowanceAmount { get; set; }
    }
}

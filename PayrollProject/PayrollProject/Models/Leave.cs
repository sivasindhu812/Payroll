using System.ComponentModel.DataAnnotations;

namespace PayrollProject.Models
{
    public class Leave
    {
        [Key]
        public int LeaveCode { get; set; }

        // Foreign key   
        [Required]
        public int EmployeeId { get; set; }

        [Required]
        public string LeaveType { get; set; }

        [Required]
        public string FromDate { get; set; }

        [Required]
        public string ToDate { get; set; }

        [Required]
        public string LeaveReason { get; set; }

        [Required]
        public string LeaveStatus { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace PayrollProject.Models
{
    public class Admin
    {
        [Key]
        public int AdminId { get; set; }

        [Required]
        public string AdminName { get; set; }

        [Required]
        public string AdminEmail { get; set; }

        [Required]
        public string AdminPassword { get; set; }
    }
}

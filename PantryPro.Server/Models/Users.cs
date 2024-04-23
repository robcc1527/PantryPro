using System.ComponentModel.DataAnnotations;

namespace PantryPro.Server.Models
{
    public class Users
    {
    public int Id { get; set; }

    [Required(ErrorMessage = "Please enter first name")]
    [StringLength(30)]
    public string FirstName { get; set; } = default!;

    [Required(ErrorMessage = "Please enter last name")]
    [StringLength(30)]
    public string LastName { get; set; } = default!;


    [Required]
    [EmailAddress]
    [Display(Name = "Email Address")]
    public string Email { get; set; } = default!;
        
    [Required]
    [MaxLength(20, ErrorMessage = "Username cannot exceed 20 characters")]
    [Display(Name = "User Handle")]
    [DataType(DataType.Text)]
    public string Username { get; set; } = default!;

    [Required]
    [Compare("Password", ErrorMessage = "Password and Confirmation Password must match.")]
    public string ConfirmPassword { get; set; } = default!;

    [Required]
    public string Password { get; set; } = default!;
    
    [Display(Name = "Creation Date")]
    public DateTime DateCreation{ get; set; }

    [Display(Name = "Modified Date")]
    public DateTime ModifyDate{ get; set; }
    }
}
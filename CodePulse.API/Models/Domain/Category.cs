using System.ComponentModel.DataAnnotations;

namespace CodePulse.API.Models.Domain
{
    public class Category
    {
        public Guid Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string UrlHandle { get; set; }

        public ICollection<BlogPost> BlogPosts { get; set; }
    }
}

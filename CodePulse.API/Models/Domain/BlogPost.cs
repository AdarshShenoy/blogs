using System.ComponentModel.DataAnnotations;

namespace CodePulse.API.Models.Domain
{
    public class BlogPost
    {
        public Guid Id { get; set; }

        [Required]
        public string Title { get; set; }
        [Required]
        public string ShortDescription { get; set; }
        [Required]
        public string Content { get; set; }
        public string FeaturedImageUrl { get; set; }
        [Required]
        public string UrlHandle { get; set; }
        public DateTime PublishedDate { get; set; }
        [Required]
        public string Author { get; set; }
        public bool IsVisible { get; set; }

        public ICollection<Category> Categories { get; set; }
    }
}

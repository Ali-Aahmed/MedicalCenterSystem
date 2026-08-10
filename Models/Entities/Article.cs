namespace MedicalCenterSystem.Models.Entities;

public class Article
{
    public int Id { get; set; }

    public int ArticleCategoryId { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Summary { get; set; }

    public string Content { get; set; } = string.Empty;

    public string? ImageUrl { get; set; }

    public string? AuthorName { get; set; }

    public DateTime PublishedAt { get; set; }

    public bool IsPublished { get; set; } = true;

    public ArticleCategory ArticleCategory { get; set; } = null!;
}
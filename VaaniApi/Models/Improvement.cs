namespace VaaniApi.Models
{
    public class Improvement
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string OriginalText { get; set; } = string.Empty;
        public string ImprovedText { get; set; } = string.Empty;
        public string Explanation { get; set; } = string.Empty;
        public string Tone { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}

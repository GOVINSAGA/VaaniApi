namespace VaaniApi.DTOs
{
    public class HistoryResponseDTO
    {
        public string OriginalText { get; set; } = string.Empty;
        public string ImprovedText { get; set; } = string.Empty;
        public string Explanation { get; set; } = string.Empty;
        public string Tone { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }
}

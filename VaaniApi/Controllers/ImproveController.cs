using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using VaaniApi.Data;
using VaaniApi.DTOs;
using VaaniApi.Models;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ImproveController : ControllerBase
{
    private readonly AiService _aiService;
    private readonly AppDbContext _context;

    public ImproveController(AiService aiService, AppDbContext context)
    {
        _aiService = aiService;
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> Improve([FromBody] ImproveRequestDTO request)
    {
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        var result = await _aiService.ImproveText(request.Text, request.Tone);

        var improvement = new Improvement
        {
            UserId = int.Parse(userId),
            OriginalText = request.Text,
            ImprovedText = result.ImprovedText,
            Explanation = result.Explanation,
            Tone = request.Tone
        };

        _context.Improvements.Add(improvement);
        await _context.SaveChangesAsync();

        return Ok(result);
    }


    [HttpGet("history")]
    public IActionResult GetHistory()
    {
        var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

        var history = _context.Improvements
            .Where(x => x.UserId == int.Parse(userId))
            .OrderByDescending(x => x.CreatedAt)
            .Select(x => new HistoryResponseDTO
            {
                OriginalText = x.OriginalText,
                ImprovedText = x.ImprovedText,
                Explanation = x.Explanation,
                Tone = x.Tone,
                CreatedAt = x.CreatedAt
            })
            .ToList();

        return Ok(history);
    }
}
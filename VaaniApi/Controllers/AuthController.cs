using Microsoft.AspNetCore.Mvc;
using VaaniApi.DTOs;
using Microsoft.AspNetCore.Authorization;
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] AuthRequestDTO request)
    {
        if (request == null || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            return BadRequest("Invalid data");

        var token = _authService.Register(request.Email, request.Password);
        return Ok(new { token });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] AuthRequestDTO request)
    {
        var token = _authService.Login(request.Email, request.Password);
        return Ok(new { token });
    }
}
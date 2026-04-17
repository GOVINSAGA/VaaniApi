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
    public IActionResult Register(string email, string password)
    {
        var token = _authService.Register(email, password);
        return Ok(new { token });
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] AuthRequestDTO request)
    {
        var token = _authService.Login(request.Email, request.Password);
        return Ok(new { token });
    }
}
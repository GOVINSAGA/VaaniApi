using Microsoft.AspNetCore.Mvc;
using VaaniApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using System;

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
            return BadRequest(new { message = "Invalid data" });

        try
        {
            var token = _authService.Register(request.Email, request.Password);
            return Ok(new { token });
        }
        catch (Exception ex)
        {
            // Catch any registration errors (like "User already exists")
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] AuthRequestDTO request)
    {
        try
        {
            var token = _authService.Login(request.Email, request.Password);

            // Check if the service returned a null or empty token (meaning bad password)
            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            return Ok(new { token });
        }
        catch (Exception ex)
        {
            // If the service crashes or throws an error, catch it and return 401
            return Unauthorized(new { message = "Invalid email or password" });
        }
    }
}
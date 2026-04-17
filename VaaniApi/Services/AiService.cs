using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using System.Text.Json.Serialization;
using VaaniApi.DTOs;

public class AiService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public AiService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _apiKey = config["Nvidia:ApiKey"];
    }

    public async Task<ImproveResponseDTO> ImproveText(string text, string tone)
    {
        var url = "https://integrate.api.nvidia.com/v1/chat/completions";

        var prompt = $@"
Improve the following text in {tone} tone.
Also explain why the improved version is better.

Text: ""{text}""

Return ONLY valid JSON. No extra text:
{{
  ""improvedText"": """",
  ""explanation"": """"
}}";

        var requestBody = new
        {
            model = "nvidia/nemotron-3-super-120b-a12b",
            messages = new[]
            {
                new { role = "user", content = prompt }
            },
            max_tokens = 512,
            temperature = 0.5,
            top_p = 0.9,
            stream = false
        };

        var json = JsonConvert.SerializeObject(requestBody);

        var request = new HttpRequestMessage(HttpMethod.Post, url);
        request.Headers.Add("Authorization", $"Bearer {_apiKey}");
        request.Content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.SendAsync(request);
        var result = await response.Content.ReadAsStringAsync();

        Console.WriteLine("RAW NVIDIA RESPONSE:");
        Console.WriteLine(result);

        dynamic parsed = JsonConvert.DeserializeObject(result);

        try
        {
            string content = parsed.choices[0].message.content.ToString();

            return JsonConvert.DeserializeObject<ImproveResponseDTO>(content);
        }
        catch
        {
            throw new Exception("AI response parsing failed: " + result);
        }
    }
}
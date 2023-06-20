using Microsoft.AspNetCore.Mvc;

namespace Untitled.API.Controllers.V1;

public class TestController : ApiController
{
    [HttpGet]
    [Route("test")]
    [ApiVersion("1.0")]
    [ApiVersion("2.0")]
    public IActionResult Get()
    {
        return Ok("That's good");
    }
}
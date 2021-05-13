using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TinyURL.Models;
using TinyURL.Services;

namespace TinyURL.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UrlController : ControllerBase
    {
        private readonly IUrlService _urlService;
        public UrlController(IUrlService urlService)
        {
            this._urlService = urlService;
        }

        [HttpGet("{code}")]
        public Url GetUrl([FromRoute] string code)
        {
            string shortUrl = "http://localhost:45434/" + code;
            return this._urlService.GetUrl(shortUrl);
        }

        [HttpPost]
        public IActionResult CreateShortUrl([FromBody] Url url)
        {
            return Ok(this._urlService.Create(url));
        }
    }
}

using System.Collections.Generic;
using TinyURL.Models;

namespace TinyURL.Services
{
    public interface IUrlService
    {
        Url Create(Url url);
        Url GetUrl(string shortUrl);
        ICollection<Url> GetVisitedUrls();
    }
}

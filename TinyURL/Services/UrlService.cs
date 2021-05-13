
using MongoDB.Driver;
using System.Collections.Generic;
using TinyURL.Models;

namespace TinyURL.Services
{
    public class UrlService : IUrlService
    {
        private readonly IMongoCollection<Url> _urls;
        public UrlService(ITinyURLDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            this._urls = database.GetCollection<Url>(settings.URLsCollectionName);
        }

        public Url Create(Url url) 
        {
            this._urls.InsertOne(url);
            return url;
        }

        public Url GetUrl(string shortUrl)
        {
            Url url = this._urls.Find(url => url.ShortUrl == shortUrl).FirstOrDefault();
            if(url != null)
            {
                url.Count++;
                this._urls.ReplaceOne(u => u.ShortUrl == url.ShortUrl, url);
            }

            return url;
        }

        public ICollection<Url> GetVisitedUrls()
        {
            return this._urls.Find(url => true).SortByDescending(url => url.Count).Limit(10).ToList();
        }
    }
}

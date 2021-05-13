using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TinyURL.Models
{
    public class TinyURLDatabaseSettings : ITinyURLDatabaseSettings
    {
        public string URLsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface ITinyURLDatabaseSettings
    {
        string URLsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}

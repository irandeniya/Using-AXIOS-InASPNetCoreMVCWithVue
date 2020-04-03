using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETCoreWithVueJs.ResourceModels
{
    public class JsonResponseResource
    {
        public bool Success { get { return Errors == null || !Errors.Any(); } }
        public List<string> Errors { get; set; }
    }
}

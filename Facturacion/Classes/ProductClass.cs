using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Classes
{
	public class ProductClass
	{
		public int id { get; set; }
		public DateTime dataCreated { get; set; }
		public string name { get; set; }
		public int price { get; set; }
		public int stock { get; set; }
	}
}

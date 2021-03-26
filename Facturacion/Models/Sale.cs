using System;
using System.Collections.Generic;

#nullable disable

namespace Facturacion.Models
{
    public partial class Sale
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public int IdCustomer { get; set; }
        public decimal? TotalVal { get; set; }
        public string Description { get; set; }
    }
}

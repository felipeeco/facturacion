using System;
using System.Collections.Generic;

#nullable disable

namespace Facturacion.Models
{
    public partial class ProductsSelled
    {
        public int Id { get; set; }
        public DateTime? DateCreated { get; set; }
        public int? SaleId { get; set; }
        public int? CustomerId { get; set; }
    }
}

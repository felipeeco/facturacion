using System;
using System.Collections.Generic;

#nullable disable

namespace Facturacion.Models
{
    public partial class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public int? CellPhone { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string PassWord { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public DateTime? Birthday { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}

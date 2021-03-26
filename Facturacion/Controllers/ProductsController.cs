using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Facturacion.Controllers;
using System.Transactions;
using Facturacion.Classes;
using Facturacion.Models;

namespace Facturacion.Controllers
{
	[ApiController]
	public class ProductsController : Controller
	{
		[HttpPost]
		[Route("save-product")]
		public int SaveProduct([FromBody] ProductClass productForm)
		{
			int answer = 0;
			try
			{
				using (FacturacionContext db = new FacturacionContext())
				{
					using (var transaccion = new TransactionScope())
					{
						Product productModel = new Product();
						productModel.DateCreated = DateTime.Now;
						productModel.Name = productForm.name;
						productModel.Price = productForm.price;
						productModel.Stock = productForm.stock;
						db.Add(productModel);
						db.SaveChanges();
						transaccion.Complete();
						answer = 1;
					}
				}
			}
			catch (Exception)
			{
				answer = 2;
			}
			return answer;
		}
	}
}

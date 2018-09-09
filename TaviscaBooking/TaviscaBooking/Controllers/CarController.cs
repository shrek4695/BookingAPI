using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaviscaBooking.Models;

namespace TaviscaBooking.Controllers
{
    public class CarController : ApiController
    {
        public IEnumerable<Car> GetValues()
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            return obj.Cars.ToList();
        }
        public IEnumerable<Car> GetSelectedValues(String Inputval)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (Inputval == "Booked")
            {
                var bookedQuery = from value in obj.Cars where value.Booked == true select value;
                return bookedQuery.ToList();
            }
            else
            {
                var savedQuery = from value in obj.Cars where value.Saved == true select value;
                return savedQuery.ToList();
            }
        }
        public void PostValues([FromBody]Car car)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            var id = obj.Cars.Max(pId => pId.Car_Id);
            int newId = int.Parse(id.ToString());
            newId = newId + 1;
            car.Car_Id = newId;
            obj.Cars.Add(car);
            obj.SaveChanges();
        }
        public void PutValues([FromBody]SelectedValue sel)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (sel.Selection == "Book")
            {
                obj.Cars.Find(sel.Id).Booked = true;
                obj.SaveChanges();
            }
            else
            {
                obj.Cars.Find(sel.Id).Saved = true;
                obj.SaveChanges();
            }
        }
    }
}

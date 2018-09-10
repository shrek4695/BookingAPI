using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaviscaBooking.Models;
using System.Web.Http.Cors;

namespace TaviscaBooking.Controllers
{
    public class FlightController : ApiController
    {
        public IEnumerable<Flight> GetValues()
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            return obj.Flights.ToList();
        }
        public IEnumerable<Flight> GetSelectedValues(String Inputval)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (Inputval == "Booked")
            {
                var bookedQuery = from value in obj.Flights where value.Booked == true select value;
                return bookedQuery.ToList();
            }
            else
            {
                var savedQuery = from value in obj.Flights where value.Saved == true select value;
                return savedQuery.ToList();
            }
        }
        public void PostValues([FromBody]Flight flight)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            var id = obj.Flights.Max(pId => pId.Flight_Id);
            int newId = int.Parse(id.ToString());
            newId = newId + 1;
            flight.Flight_Id = newId;
            obj.Flights.Add(flight);
            obj.SaveChanges();
        }
        public void PutValues([FromBody]SelectedValue sel)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (sel.Selection == "Book")
            {
                obj.Flights.Find(sel.Id).Booked = true;
                obj.SaveChanges();
            }
            else
            {
                obj.Flights.Find(sel.Id).Saved = true;
                obj.SaveChanges();
            }
        }
    }
}

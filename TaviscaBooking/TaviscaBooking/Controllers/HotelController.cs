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
    public class HotelController : ApiController
    {
        public IEnumerable<Hotel> GetValues()
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            return obj.Hotels.ToList();
        }
        public IEnumerable<Hotel> GetSelectedValues(String Inputval)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (Inputval == "Booked")
            {
                var bookedQuery = from value in obj.Hotels where value.Booked == true select value;
                return bookedQuery.ToList();
            }
            else
            {
                var savedQuery = from value in obj.Hotels where value.Saved == true select value;
                return savedQuery.ToList();
            }
        }
        public void PostValues([FromBody]Hotel hotel)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            var id = obj.Hotels.Max(pId => pId.Hotel_Id);
            int newId = int.Parse(id.ToString());
            newId = newId+1;
            obj.Hotels.Add(hotel);
            obj.SaveChanges();
        }
        public void PutValues([FromBody]SelectedValue sel)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (sel.Selection == "Book")
            {
                obj.Hotels.Find(sel.Id).Booked = true;
                obj.SaveChanges();
            }
            else
            {
                obj.Hotels.Find(sel.Id).Saved = true;
                obj.SaveChanges();
            }
        }
    }
}

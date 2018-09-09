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
    public class ActivityController : ApiController
    {
        public IEnumerable<Activity> GetValues()
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            return obj.Activities.ToList();
        }
        public IEnumerable<Activity> GetSelectedValues(String Inputval)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if (Inputval == "Booked")
            {
                var bookedQuery = from value in obj.Activities where value.Booked == true select value;
                return bookedQuery.ToList();
            }
            else
            {
                var savedQuery = from value in obj.Activities where value.Saved == true select value;
                return savedQuery.ToList();
            }
        }
        public void PostValues([FromBody]Activity activity)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            var id = obj.Activities.Max(pId => pId.Activity_Id);
            int newId = int.Parse(id.ToString());
            newId = newId + 1;
            activity.Activity_Id = newId;
            obj.Activities.Add(activity);
            obj.SaveChanges();
        }
        public void PutValues([FromBody]SelectedValue sel)
        {
            TaviscaProductsEntities obj = new TaviscaProductsEntities();
            if(sel.Selection=="Book")
            {
                obj.Activities.Find(sel.Id).Booked = true;
                obj.SaveChanges();
            }
            else
            {
                obj.Activities.Find(sel.Id).Saved = true;
                obj.SaveChanges();
            }
        }
    }
}

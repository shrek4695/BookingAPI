
        function ActivitySubmit()
        {
            var activity = new Object();
            activity.Activity_Id = 500;
            activity.Activity_Name = $('#AName').val();
            activity.Activity_Location = $('#ALocation').val();
            activity.Activity_FromDate = $('#AFromDate').val();
            activity.Activity_ToDate = $('#AToDate').val();
            activity.Activity_Price = parseInt($('#APrice').val());
            activity.Booked = false;
            activity.Saved = false;
            activity = JSON.stringify(activity);
            console.log(activity);
           

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
         
                }
            };
            xmlhttp.open("POST", "http://localhost:64362/api/Activity", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(activity);
        }
        function HotelSubmit()
        {
            var hotel = new Object();
            hotel.Hotel_Id = 500;
            hotel.Hotel_Name = $('#HName').val();
            hotel.Hotel_Location = $('#HLocation').val();
            hotel.Hotel_FromDate = $('#HFromDate').val();
            hotel.Hotel_ToDate = $('#HToDate').val();
            hotel.Hotel_Price = parseInt($('#HPrice').val());
            hotel.Booked = false;
            hotel.Saved = false;
            hotel = JSON.stringify(hotel);
            console.log(hotel);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
         
                }
            };
            xmlhttp.open("POST", "http://localhost:64362/api/Hotel", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(hotel);
        }
        function CarSubmit() {
            var car = new Object();
            car.Car_Id = 500;
            car.Car_Model = $('#CModel').val();
            car.Car_RegisterNumber = $('#CRegisterNumber').val();
            car.Car_Category = $('#CCategory').val();
            car.Car_Source = $('#CSource').val();
            car.Car_Destination = $('#CDestination').val();
            car.Car_FromDate = $('#CFromDate').val();
            car.Car_ToDate = $('#CToDate').val();
            car.Car_Price = parseInt($('#CPrice').val());
            car.Booked = false;
            car.Saved = false;
            car = JSON.stringify(car);
            console.log(car);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xmlhttp.open("POST", "http://localhost:64362/api/Car", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(car);
        }
        function FlightSubmit() {
            var flight = new Object();
            flight.Flight_Id = 500;
            flight.Flight_Name = $('#FName').val();
            flight.Flight_Source = $('#FSource').val();
            flight.Flight_Destination = $('#FDestination').val();
            flight.Flight_DepartureDate = $('#FDepartureDate').val();
            flight.Flight_ArrivalDate = $('#FArrivalDate').val();
            flight.Flight_DepartureTime = $('#FDepartureTime').val();
            flight.Flight_ArrivalTime = $('#FArrivalTime').val();
            flight.Flight_Price = parseInt($('#FPrice').val());
            flight.Booked = false;
            flight.Saved = false;
            flight = JSON.stringify(flight);
            console.log(flight);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xmlhttp.open("POST", "http://localhost:64362/api/Flight", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(flight);
        }
        function HotelDetails() {
            document.getElementById("ProductDetails").innerHTML = "";
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var myHotel = JSON.parse(this.responseText);
                    var i;
                    document.getElementById("ProductDetails").innerHTML = document.getElementById("ProductDetails").innerHTML + "<div class=heading> Id &nbsp&nbsp&nbsp Hotel Name &nbsp&nbsp&nbsp Hotel Location &nbsp&nbsp&nbsp Hotel FromDate &nbsp&nbsp&nbsp Hotel ToDate &nbsp&nbsp&nbsp Hotel Price </div>";
                    for (i = 0; i <= myHotel.length; i++)
                        document.getElementById("ProductDetails").innerHTML = document.getElementById("ProductDetails").innerHTML + "<div>" + myHotel[i].Hotel_Id + "&nbsp&nbsp&nbsp" + myHotel[i].Hotel_Name + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + myHotel[i].Hotel_Location + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + myHotel[i].Hotel_FromDate + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + myHotel[i].Hotel_ToDate + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + myHotel[i].Hotel_Price + "&nbsp&nbsp&nbsp<input type=button value=Book onclick=hotelbook(" + myHotel[i].Hotel_Id + ") /> <input type=button value=Save onclick=hotelsave(" + myHotel[i].Hotel_Id + ") /> </div>";
                }
            };
            xmlhttp.open("GET", "http://localhost:64362/api/Hotel", true);
            xmlhttp.send();
        }
        function FlightDetails() {
            document.getElementById("ProductDetails").innerHTML = "";
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var myFlight = JSON.parse(this.responseText);
                    var i;
                    document.getElementById("ProductDetails").innerHTML = document.getElementById("ProductDetails").innerHTML + "<div class=heading> Id &nbsp&nbsp&nbsp Flight Name &nbsp&nbsp&nbsp Flight Source &nbsp&nbsp&nbsp Flight Destination  </div>";
                    for (i = 0; i <= myFlight.length; i++)
                        document.getElementById("ProductDetails").innerHTML = document.getElementById("ProductDetails").innerHTML + "<div>" + myFlight[i].Flight_Id + "&nbsp&nbsp&nbsp" + myFlight[i].Flight_Name + "<input type=button value=Book onclick=flightbook(" + myFlight[i].Flight_Id + ") /> <input type=button value=Save onclick=flightsave(" + myFlight[i].Flight_Id + ") /> </div>";
                }
            };
            xmlhttp.open("GET", "http://localhost:64362/api/Flight", true);
            xmlhttp.send();
        }
        function CarDetails() {
            document.getElementById("ProductDetails").innerHTML = "";
             var xmlhttp = new XMLHttpRequest();
             xmlhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) {
                     var myCar = JSON.parse(this.responseText);
                     var i;
                     for (i = 0; i <= myCar.length;i++)
                         document.getElementById("ProductDetails").innerHTML = document.getElementById("ProductDetails").innerHTML + "<div>" + myCar[i].Car_Id + "&nbsp&nbsp&nbsp" + myCar[i].Car_Model +  "<input type=button value= Book onclick= carbook(" + myCar[i].Car_Id + ") /> <input type=button value=Save onclick=carsave(" + myCar[i].Car_Id + ") /></div>";
                 }
             };
             xmlhttp.open("GET", "http://localhost:64362/api/Car", true);
             xmlhttp.send();
        }
        function ActivityDetails() {
            document.getElementById("ProductDetails").innerHTML = "";
             var xmlhttp = new XMLHttpRequest();
             xmlhttp.onreadystatechange = function () {
                 if (this.readyState == 4 && this.status == 200) {
                     var myActivity = JSON.parse(this.responseText);
                     var i;
                     for (i = 0; i <= myActivity.length; i++)
                         document.getElementById("ProductDetails").innerHTML = document.getElementById("ProductDetails").innerHTML + "<div>" + myActivity[i].Activity_Id + "&nbsp&nbsp&nbsp" + myActivity[i].Activity_Name + "<input type=button value= Book onclick= activitybook(" + myActivity[i].Activity_Id + ") /> <input type=button value=Save onclick=activitysave(" + myActivity[i].Activity_Id + ") /></div>";
                 }
             };
             xmlhttp.open("GET", "http://localhost:64362/api/Activity", true);
             xmlhttp.send();
        }
        function admin()
        {
            document.getElementById("Admin").style.display = "block";
            document.getElementById("User").style.display = "none";
            document.getElementById("Adminactivity").style.display = "none";
            document.getElementById("Admincar").style.display = "none";
            document.getElementById("Adminflight").style.display = "none";
            document.getElementById("Adminhotel").style.display = "none";
        }
        function user() {
            document.getElementById("Admin").style.display = "none";
            document.getElementById("User").style.display = "block";
            document.getElementById("ProductDetails").innerHTML = "";
        }
        function AdminHotel() {
            document.getElementById("Adminactivity").style.display = "none";
            document.getElementById("Admincar").style.display = "none";
            document.getElementById("Adminflight").style.display = "none";
            document.getElementById("Adminhotel").style.display = "block";
        }
        function AdminFlight() {
            document.getElementById("Adminactivity").style.display = "none";
            document.getElementById("Admincar").style.display = "none";
            document.getElementById("Adminflight").style.display = "block";
            document.getElementById("Adminhotel").style.display = "none";
        }
        function AdminCar() {
            document.getElementById("Adminactivity").style.display = "none";
            document.getElementById("Admincar").style.display = "block";
            document.getElementById("Adminflight").style.display = "none";
            document.getElementById("Adminhotel").style.display = "none";
        }
        function AdminActivity() {
            document.getElementById("Adminactivity").style.display = "block";
            document.getElementById("Admincar").style.display = "none";
            document.getElementById("Adminflight").style.display = "none";
            document.getElementById("Adminhotel").style.display = "none";
        }
        function flightbook(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Book";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Flight", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function flightsave(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Save";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Flight", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function carbook(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Book";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Car", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function carsave(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Save";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Car", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function hotelbook(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Book";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Hotel", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function hotelsave(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Save";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Hotel", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function activitybook(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Book";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Activity", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        function activitysave(id) {
            var ob = new Object();
            ob.Id = id;
            ob.Selection = "Save";
            ob = JSON.stringify(ob);
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            xmlhttp.open("PUT", "http://localhost:64362/api/Activity", true);
            xmlhttp.setRequestHeader("Content-Type", "application/json");
            xmlhttp.send(ob);
        }
        
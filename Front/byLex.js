 var variab ="";



 setTimeout(function run() {

            navigator.geolocation.getCurrentPosition(function(position) {

                var latitude = position.coords.latitude;
                console.log(latitude);
                var longitude = position.coords.longitude;
                console.log(longitude);

                
          console.log("poslal");
          axios.post('https://susanin-navigate.herokuapp.com/busaround/', {
            latitude: latitude,
            longitude: longitude})
            .then(response => {
              var busStop = response.data.busStop;
              

             if(busStop != variab){
                  Push.create("Вы рядом с остановкой",{
            body: busStop,
            timeout: 5000,
            onClick: function () {
                window.focus();
                this.close();
            }
        })
                  variab = busStop; 
                };
            
 
              //alert("Остановка"+" "+busStop+" "+latitude+" "+longitude);
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              console.log("oshibka")
            });
          setTimeout(run, 10000); })
        }, 10000);


     navigator.geolocation.getCurrentPosition(function(position) {

                var latitude = position.coords.latitude;
                console.log(latitude);
                var longitude = position.coords.longitude;
                console.log(longitude);


          console.log("poslal");
          axios.post('https://susanin-navigate.herokuapp.com/busaround/', {
            latitude: latitude,
            longitude: longitude})
            .then(response => {
              const busStop = response.data.busStop;

            
Push.create("Ближайшая остановка:",{
            body: busStop,
            timeout: 10000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
              //alert("Остановка"+" "+busStop+" "+latitude+" "+longitude);
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              console.log("oshibka")
            });
       });



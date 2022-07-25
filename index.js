function updateMap(){
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp =>{
        console.log(rsp.data)
        rsp.data.forEach(element =>{
            latitude = element.latitude;
            longitude = element.longitude;
            cases = element.infected;
            if (cases>255){
                color="rgb(255,0,0)"
            }

            else{
                color=`rgb(${cases},0,0)`
            }
            new mapoxgl.Marker({
                draggable: false,
                color: color
            })
            .setLgnLat([longitude,latitude])
            .addTo(map);
        });
    })
}
let interval = 20000;
setInterval(updateMap,interval);
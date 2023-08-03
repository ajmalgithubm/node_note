
function longTask(milliSecond){
    dt = new Date();
    while( (new Date()-dt) < milliSecond){
       // console.log(new Date() -dt)
    }
    console.log("end")
}

function showEnd(){
    console.log("End..")
}

console.log("starting....")
setTimeout(showEnd, 2000);

console.log("starting....")
setTimeout(showEnd, 2000);

console.log("starting....")
setTimeout(showEnd, 2000);




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


var hello = (callback) => {
    callback("Ajmal")
}

var hey = (data) => {
    console.log("Hey",data)
}

hello(hey)
status = "";
img = "";

function preload(){
    img = loadImage("airpods.png");
}

function setup(){
    canvas = createCanvas(540,300);
    canvas.position(355,200);
/*/I have tried to do center() but it is overlapping the status so I have given position/*/
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("airpods_status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("CocoSSD is initialized!!");
    status = true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;

    }  
}
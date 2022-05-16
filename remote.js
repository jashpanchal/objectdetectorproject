status = "";
img = "";
objects = [];

function preload(){
    img = loadImage("remote.png");
}

function setup(){
    canvas = createCanvas(200,300);
    canvas.center();
/*/I have tried to do center() but it is overlapping the status so I have given position/*/
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("remote_status").innerHTML = "Status: Detecting Objects";
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

function draw(){
    image(img,0,0,200,300);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            percent = floor(objects[i].confidence * 100);
            label = objects[i].label;
            x = objects[i].x - 200;
            y = objects[i].y - 70;
            fill("#ff0000");
            stroke("#ff0000");
            text(label + " " + percent + "%",x + 15,y + 15);
            noFill();
            rect(x,y,objects[i].width - 200,objects[i].height - 650);
            document.getElementById("no_of_objects").innerHTML = "Object given : 1; Number of Objects identified : " + objects.length + " are detected.";
        }
    }
}
function preload(){
}

function setup(){
    canvas=createCanvas(450, 400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(300,300);
    webcam.hide();

    poseNet=ml5.poseNet(webcam, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
    }
}


function draw(){
    image(webcam, 0, 0, 450, 400);
}

function take_snapshot(){
    save("image.png");
}
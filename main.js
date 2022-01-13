noseX=0;
noseY=0;

function preload()
{
clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-40;
        noseY=results[0].pose.nose.y;
    }
}
function draw()
{
    image(video,0,0,640,480);
    image(clown_nose,noseX,noseY,80,35)
}
function take_snapshot()
{
    save('student_name.png');
}
function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}
nose_x = 0;
nose_y = 0;

function preload()
{
    moustache = loadImage('https://i.postimg.cc/2SNrR0j4/moustache.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is informed');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("x = " + results[0].pose.nose.x);
        console.log("y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video,0,0,300,300);
    image(moustache,nose_x-30,nose_y,50,50);
}

function take_snapshot()
{
    save('moustache_face_filter.jpeg');
}
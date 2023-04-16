Music.mp3 = "";
Music2.mp3 = "";

function preload()
{
    Music = loadSound("Song.mp3");
    Music2 = loadSound("Song2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}
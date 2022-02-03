function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/n7KVXGhvy/.json',modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}
function gotResults(){
    console.log("Got Result");
}
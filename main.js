function start()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/n7KVXGhvy/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
   if(error){
       console.error(error);
   } else {
       console.log(results);
       randomr = Math.floor(Math.random() * 255) + 1;
       randomg = Math.floor(Math.random() * 255) + 1;
       randomb = Math.floor(Math.random() * 255) + 1;

       document.getElementById("result").innerHTML = "I Can Hear"
       results[0].label;
       document.getElementById("confidence").innerHTML = "Acuracy - " +
       (results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("result").style.color = "rgb(" 
       + randomr + "," + randomg + "," + randomb + ")";
       document.getElementById("confidence").style.color = "rgb(" 
       + randomr + "," + randomg + "," + randomb + ")";

    
       img = document.getElementById('img');
       img1 = document.getElementById('img');
       img2 = document.getElementById('img');
       img3 = document.getElementById('img');

       if(results[0].label == "Background Noise"){
           img.src = "lion-king-lion.gif";
       }  else if (results[0].label == "Barking"){
           img1.src = "funny-animals-dog.gif";
       } else if (results[0].label == "Meowing"){
           img2.src = "cat.gif";

       } else{
           img3.src = "monkey-52.gif";
       }
       
   }
}
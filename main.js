Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
})
camera=document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot()
{
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img id='capture_image' src=' " + data_uri + " '> ";

    })

}

console.log('Current versoin of ml5 lib =', ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wwb5924lT/model.json",ModelLoaded);

function ModelLoaded(){
    console.log("model has been loaded and conected");
}

function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3);
}
}
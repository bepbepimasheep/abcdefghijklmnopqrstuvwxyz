function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wnHPgK0B0/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('grilo')
        img1 = document.getElementById('texugo')
        img2 = document.getElementById('pato')
        img3 = document.getElementById('chita')

        if (results[0].label == "grilo") {
            img.src = 'grilo.gif';
            img1.src = 'texugo.jpg';
            img2.src = 'pato.jpg';
            img3.src = 'chita.jpg';
        }
        else if (results[0].label == "texugo") {
            img.src = 'grilo.jpg';
            img1.src = 'texugo.gif';
            img2.src = 'pato.jpg';
            img3.src = 'chita.jpg';
        }
        else if (results[0].label == "pato") {
            img.src = 'grilo.jpg';
            img1.src = 'texugo.jpg';
            img2.src = 'pato.gif';
            img3.src = 'chita.jpg';
        }
        else if (results[0].label == "chita") {
            img.src = 'grilo.jpg';
            img1.src = 'texugo.jpg';
            img2.src = 'pato.jpg';
            img3.src = 'chita.gif';
        }
    }
}
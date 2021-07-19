Webcam.set({
    width: 620,
    height: 600,
    img_format:'png',
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
var fullImgDiv = document.getElementById("fullImgDiv");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgDiv.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(pic){
    fullImgDiv.style.display = "none";
}


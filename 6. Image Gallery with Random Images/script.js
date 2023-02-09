
const foto = document.querySelectorAll("img");

for (let i = 0; i < foto.length; i++) {
    foto[i].src = `https://source.unsplash.com/random/500x500?${i}`;
}

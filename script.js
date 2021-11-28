let cover = document.querySelector(".cover");
let halaman1 = document.querySelector(".layout-kiri")

document.querySelector("#btn-buka-undangan").addEventListener('click', function() {
    console.log("buka undangan");
    //close cover
    cover.classList.add("display-none");
    halaman1.classList.remove("display-none");
    // buka halaman undangan
    playAudio();
});

function playAudio() {
    const audio = new Audio("23255679_happy-wedding_by_2bstudio_preview.mp3");
    audio.loop = true;
    audio.play();
}
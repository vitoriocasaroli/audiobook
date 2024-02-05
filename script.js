const playPauseButton = document.getElementById('play-pause');
const audioChapter = document.getElementById('audio-capitulo');
const forwardButton = document.getElementById('proximo');
const previousButton = document.getElementById('anterior');
const chapterID = document.getElementById('capitulo');

const totalChapters = 10;
let currentChapter = 1;
// equal to 0, then the audio is not playing
// equal to 1, the audio is playing
let isPlaying = 0;

function tocarFaixa() {
    audioChapter.play();
    playPauseButton.classList.remove('bi-play-circle-fill');
    playPauseButton.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioChapter.pause();
    playPauseButton.classList.remove('bi-pause-circle-fill');
    playPauseButton.classList.add('bi-play-circle-fill');
}

function playOrPause() {
    if (isPlaying === 0) {
        tocarFaixa();
        isPlaying = 1;
    } else {
        pausarFaixa();
        isPlaying = 0;
    }
}

function nextAudioTrack() {
    if (currentChapter === totalChapters) {
        currentChapter = 1;
    } else {
        currentChapter = currentChapter + 1;
    }
    audioChapter.src = './books/dom-casmurro/' + currentChapter + '.mp3';
    chapterID.innerText = 'Capítulo ' + currentChapter;
    tocarFaixa();
    isPlaying = 1;
}

function previousAudioTrack() {
    if (currentChapter === 1) {
        currentChapter = totalChapters;
    } else {
        currentChapter = currentChapter - 1;
    }
    audioChapter.src = './books/dom-casmurro/' + currentChapter + '.mp3';
    chapterID.innerText = 'Capítulo ' + currentChapter;
    tocarFaixa();
    isPlaying = 1;
}

playPauseButton.addEventListener('click', playOrPause);
forwardButton.addEventListener('click', nextAudioTrack);
previousButton.addEventListener('click', previousAudioTrack);


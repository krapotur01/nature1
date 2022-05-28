function toggleAudio(index) {
    if (player.src.endsWith(`${index}.mp3`)) {
        player.pause();
        return;
    }
    player.src = `/audio/0${index}.mp3`;
    player.play();
}


function toggleImg(img) {
    img.classList.toggle('img-active');
    document
        .querySelectorAll('.card-img')
        .forEach((x) => img !== x && x.classList.remove('img-active'));
}

setInterval(() => (clock.innerHTML = new Date().toLocaleTimeString()));

container.innerHTML = ['Утро', 'Дождь', 'Речка', 'Ночь', 'Костер', 'У моря']
    .map(
        (name, i) => `
    <div class="card">
        <img src="/img/0${i}.jpg" alt="${name}" 
        onclick="toggleAudio(${i}); toggleImg(this)" class="card-img">
        <h2>${name}</h2>
    </div>
`)
    .join('');
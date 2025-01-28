let isCelebrationStarted = false;

const birthdaySong = document.getElementById('birthdaySong');
const audioButton = document.getElementById('audioToggle');
const gass = document.getElementById('rayakan');

function celebrate() {
    if (!isCelebrationStarted) {
        isCelebrationStarted = true;
        
        // Menambahkan kembang api setiap detik
        setInterval(createFireworks, 50);  // Kembang api muncul setiap 50ms
        // Menambahkan bintang setiap detik
        setInterval(createStar, 50);  // Bintang muncul setiap 50ms

        // Memutar lagu ulang tahun
        birthdaySong.play();
        // Menampilkan tombol audio setelah tombol celebrate diklik
        audioButton.style.display = 'block';  // Tombol audio muncul
        
        // Menampilkan gambar setelah tombol ditekan
        document.getElementById('myImage').style.display = 'inline';
        // Menampilkan paragraf notes setelah tombol ditekan
        document.getElementById('notes').style.display = 'inline';

        // Menghentikan animasi dengan menghapus properti animation
        gass.style.animation = 'none';
    }
}

function createFireworks() {
    var fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks-container');
    document.body.appendChild(fireworksContainer);

    var xPosition = Math.random() * window.innerWidth;
    var yPosition = Math.random() * window.innerHeight;

    fireworksContainer.style.left = `${xPosition}px`;
    fireworksContainer.style.top = `${yPosition}px`;

    for (let i = 0; i < 20; i++) {
        var particle = document.createElement('div');
        particle.classList.add('firework-particle');
        fireworksContainer.appendChild(particle);

        var angle = Math.random() * 360;
        var distance = Math.random() * 100 + 50;

        var xOffset = Math.cos(angle * Math.PI / 180) * distance;
        var yOffset = Math.sin(angle * Math.PI / 180) * distance;

        var colors = ['#ff6347', '#ffcc00', '#1e90ff', '#32cd32', '#ff1493'];
        var color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;

        particle.style.transform = `translate(-50%, -50%) translate(${xOffset}px, ${yOffset}px)`;
    }

    setTimeout(() => {
        fireworksContainer.remove();
    }, 1600);
}

function createStar() {
    var starEffect = document.createElement('div');
    starEffect.classList.add('star-effect');
    document.body.appendChild(starEffect);

    var xPosition = Math.random() * window.innerWidth;
    var yPosition = Math.random() * window.innerHeight;

    starEffect.style.left = `${xPosition}px`;
    starEffect.style.top = `${yPosition}px`;

    setTimeout(() => {
        starEffect.remove();
    }, 1600);
}

function pauseAudio() {
    if (birthdaySong.paused) {
        birthdaySong.play();
        audioButton.textContent = "🔊";
	    // Jalankan animasi properti animation
        audioButton.style.animation = '';
    } else {
        birthdaySong.pause();
        audioButton.textContent = "🔇";
	    // Menghentikan animasi dengan menghapus properti animation
        audioButton.style.animation = 'none';
    }
}

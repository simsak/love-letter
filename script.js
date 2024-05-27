function revealMessage() {
    document.getElementById("message").style.display = "none";
    document.querySelector(".heart").style.display = "none";
    document.getElementById("letter").classList.remove("hidden");
    rainPetals();
}

function rainPetals() {
    const petalContainer = document.getElementById('petal-container');
    
    for (let i = 0; i < 30; i++) { // Adjust the number of petals as needed
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petalContainer.appendChild(petal);
    }
}

import './style.css';

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        card.style.animation = "unset";
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;

        const tiltX = (y - 0.5) * 20;
        const tiltY = (0.5 - x) * 20;

        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.animation = "moveEffect 15s infinite";
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

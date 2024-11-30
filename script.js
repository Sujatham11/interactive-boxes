const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove active class from all boxes
        boxes.forEach(b => b.classList.remove('active'));
        // Add active class to clicked box
        box.classList.add('active');
    });
});

const colorButtons = document.querySelectorAll('.color-option');
colorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent box from collapsing
        const box = e.target.closest('.box');
        box.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

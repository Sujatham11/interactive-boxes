const boxes = document.querySelectorAll('.box');

// Make boxes expand when clicked
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove 'active' class from all boxes
        boxes.forEach(b => b.classList.remove('active'));
        // Add 'active' class to the clicked box
        box.classList.add('active');
    });
});

// Handle changing colors
const colorButtons = document.querySelectorAll('.color-option');
colorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from affecting the box's expansion
        const box = e.target.closest('.box');
        box.style.backgroundColor = getRandomColor();
    });
});

// Handle changing size
const sizeButtons = document.querySelectorAll('.size-option');
sizeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from affecting the box's expansion
        const box = e.target.closest('.box');

        // Change box size
        const randomWidth = Math.floor(Math.random() * 200) + 150; // Random width between 150px and 350px
        const randomHeight = Math.floor(Math.random() * 200) + 150; // Random height between 150px and 350px
        box.style.width = `${randomWidth}px`;
        box.style.height = `${randomHeight}px`;
    });
});

// Generate a random color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

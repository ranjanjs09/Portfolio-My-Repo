document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-text');
    if (!typewriterElement) {
        console.error('Typewriter element not found. Please ensure an element with id "typewriter-text" exists in your HTML.');
        return;
    }

    const words = [
        "a Frontend Developer.",
        "a UI/UX Enthusiast.",
        "a Problem Solver.",
        "always learning new things."
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Milliseconds per character when typing
    const deletingSpeed = 60; // Milliseconds per character when deleting
    const pauseAfterTyping = 1500; // Milliseconds to pause after typing a word completely
    const pauseAfterDeleting = 700; // Milliseconds to pause after deleting a word completely

    function typeWriter() {
        const currentWord = words[wordIndex];
        let currentDelay = typingSpeed;

        if (isDeleting) {
            // Delete characters
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            currentDelay = deletingSpeed;

            if (charIndex === 0) {
                // Word deleted, move to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                currentDelay = pauseAfterDeleting;
            }
        } else {
            // Type characters
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                // Word fully typed, start deleting
                isDeleting = true;
                currentDelay = pauseAfterTyping;
            }
        }

        setTimeout(typeWriter, currentDelay);
    }

    // Start the typing animation
    typeWriter();
});
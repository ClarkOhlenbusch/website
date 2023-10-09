// JavaScript
window.addEventListener('scroll', function () {
    const skillsSection = document.getElementById('skills');
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const filledBar = bar.querySelector('.filled');
            const percent = bar.getAttribute('data-percent');
            filledBar.style.width = percent;
        });
    }
});

const text = "Welcome to my personal website!\nHere you can find details about me, coding skill progress bars and more!";
let index = 0;

function typeText() {
    if (index < text.length) {
        let charToAdd = text.charAt(index);
        
        // If the character is a newline, add a <br> tag instead
        if (charToAdd === '\n') {
            charToAdd = '<br>';
        }

        document.getElementById('typing-text').innerHTML += charToAdd;
        index++;
        setTimeout(typeText, 100); // Adjust speed as needed
    }
}

// Start typing effect
typeText();


function checkAnswer(answer) {
    const correctAnswers = {
        "What language is used for web apps?": "JavaScript",
        "Where do I go to school?": "Umass Boston",
        "What was my first internship?": "RedTeaming",
        "What's the best way to reach me?": "Text or Call! (781-424-3027)"
    };

    const questionText = event.target.parentElement.querySelector('p').textContent;
    const correctAnswer = correctAnswers[questionText];
    const selectedButton = event.target;

    if (answer === correctAnswer) {
        selectedButton.style.backgroundColor = "green";
    } else {
        selectedButton.style.backgroundColor = "red";
    }
}



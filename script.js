function checkAnswer(inputId, correctAnswer) {
    var userInput = document.getElementById(inputId).value.trim();
    var feedbackId = inputId.replace('answer', 'feedback');
    var feedbackElement = document.getElementById(feedbackId);
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = "Correct!";
        http://feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswer + ".";
        http://feedbackElement.style.color = "red";
    }
}
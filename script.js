document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const messageDiv = document.getElementById("message");
    const question = document.getElementById("question");
    const image = document.getElementById("image");
    const buttons = document.getElementById("buttons");
    
    let scaleIncrement = 1.0;
    let noMessages = ["Você tem certeza?", "Pensa de novo!", "Tem certeza MESMO?", "Última chance!", "Você vai deixar seu amor triste?", "Tadinho... malvada você"];
    let clickCount = 0;

    noButton.addEventListener("click", function() {
        scaleIncrement += 0.1;
        yesButton.style.transform = `scale(${scaleIncrement})`;
        yesButton.style.transition = "transform 0.3s ease";
        
        noButton.textContent = noMessages[clickCount % noMessages.length];
        clickCount++;
    });

    yesButton.addEventListener("click", function() {
        image.src = "cachorro.png";
        image.style.display = "block";
        image.style.maxWidth = "150px";
        question.style.display = "none";
        buttons.style.display = "none";
        messageDiv.textContent = "Que bom que respondeu por livre-arbítrio! Estou muito ansioso pelos nossos dates, meu amor!! :)";
    });
});
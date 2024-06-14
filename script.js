document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const messageDiv = document.getElementById("message");
    const question = document.getElementById("question");
    const image = document.getElementById("image");
    const buttons = document.getElementById("buttons");

    let scaleIncrement = 1.0; // Inicializa o incremento de escala

    // Evento de clique no botão Não
    noButton.addEventListener("click", function() {
        scaleIncrement += 0.1; // Incrementa a escala em 0.1
        yesButton.style.transform = `scale(${scaleIncrement})`; // Aplica a transformação de escala
        yesButton.style.transition = "transform 0.3s ease"; // Aplica a transição para a transformação
    });

    // Evento de clique no botão Sim
    yesButton.addEventListener("click", function() {
        // Exibe a imagem ou gif
        image.src = "/home/fernando/vscode/date/macaco_feliz.jpg"; // Substitua pelo caminho correto da imagem ou gif
        image.style.display = "block";

        // Esconde a pergunta e os botões
        question.style.display = "none";
        buttons.style.display = "none";

        // Exibe a mensagem
        messageDiv.textContent = "Vamooo :)";
    });
});

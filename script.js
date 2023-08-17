document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const resultElement = document.getElementById("result");
  
    generateBtn.addEventListener("click", function() {
      const randomNumber = Math.floor(Math.random() * 21); // Gera número aleatório de 0 a 20
      resultElement.textContent = `Número sorteado: ${randomNumber}`;
    });
  });
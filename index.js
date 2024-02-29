<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title>Meus objetivos do ano</title>
</head>
<body>
<section class="conteudo-principal">
            <h2 class="titulo-principal">Meus Objetivos do ano_</h2>
   <div class="botoes">
            <button class="botao">Cursos na Alura</button>
            <button class="botao">Criar projetos em Javascript</button>
            <button class="botao">Criar um portfolio</button>
            <button class="botao">Atualizar meu currículo</button>
     </div>
 </section>

</body>
</html>
<script src="main.js"></script>

const botoes = document.querySelectorAll(".botao");
console.log(botoes)

for(let i=0; i <  botões.length; i++){
    console.log(i);
}
botoes[i].onclick = function(){
    
    botoes[i].classList.add(“ativo”);
}
for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
 }
const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}

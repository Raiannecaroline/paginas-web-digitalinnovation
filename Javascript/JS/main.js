
function butao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://github.com/");
    //window.location.href = "https://github.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}

/*
var validar = 0;

function validadeIdade(idade){
    if(idade >= 18){
        var validar = true;

    } else{
        validar = false;

    }
    return validar;
}

var idade = prompt("Digite a sua idade: ");
console.log(validadeIdade(idade));
*/

//alert(soma(5, 10));



/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/
/*
var count = 0;
while(count < 5){
    console.log(count);
    count = count + 1;
}
*/
/*
var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Maior de idade!!");
} else{
    alert("Menor de idade!!");
}
*/
/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/
//lista.pop();
//lista.push("uva");

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Raiane";
//var idade = 29;

//alert(nome + " tem " + idade + " anos");
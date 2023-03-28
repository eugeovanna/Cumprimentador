var nome = prompt("Digite seu nome:");

let tempo;

let dateTime = new Date();
let horaAtual = dateTime.getHours();

if(horaAtual >= 5 && horaAtual < 12){
	tempo = String('Bom dia.');
}  else if(horaAtual >= 12 && horaAtual <= 18){
    tempo = String('Boa tarde.');
} else if(horaAtual > 18 && horaAtual <= 23){
    tempo = String('Boa noite.');
} else if(horaAtual > 0 && horaAtual <= 4){
    tempo = String('Boa Madrugada.');
};

function enviar(){
    var paragrafo = document.createElement("p"); // crio o elemento <p>
    var texto = document.createTextNode('Olá, ' + nome +'. '+ tempo); // defino o texto
    paragrafo.appendChild(texto); // insiro o texto no elemento <p>
    document.body.appendChild(paragrafo); // insiro na página
 }

 enviar();
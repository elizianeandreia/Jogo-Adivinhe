let computadorAdv;
let usuariopalpites=[];
let tentativas = 0;
let maxPalpites;

let baixo=1
let alto=100

function updateRange() {
	const saidaIntervalo = document.getElementById("saidaIntervalo")
	saidaIntervalo.innerText=`${baixo} - ${alto}`
	saidaIntervalo.style.marginLeft = baixo + "%"; 
	saidaIntervalo.style.marginRight =100 - alto + "%";
	saidaIntervalo.classList.add("flash");
	
	const lowValue= document.getElementById("baixo")
	lowValue.style.flex = baixo + "%";
	lowValue.style.background="#f860C8";
	
	const space=document.getElementById("espaco")
	space.style.flex = alto - baixo + "%";
	space.style.background="#83e1d0";
	
	const highValue=document.getElementById("alto")
	highValue.style.flex = 100 - alto + "%";
	highValue.style.background="#f860C8";
	
}

function gameEnded() {
document.getElementById("novoJogoBotao").style.display="inline";
document.getElementById("caixaentrada").setAttribute("readonly", "readonly")
	
}
 
function novoJogo() {
	location.reload();
	}
function inicial() {
computadorAdv =Math.floor(Math.random() * 100 + 1); 
	console.log(computadorAdv);
	document.getElementById("novoJogoBotao").style.display="none";
  	document.getElementById("areaJogo").style.display="none";
}

function startGameview() {
document.getElementById("boasvindas").style.display="none";
document.getElementById("areaJogo").style.display="block";
	
}

function modofacil(){
	maxPalpites=10;
	startGameview();
	}

function mododificil(){
	maxPalpites =5;
	startGameview();
	}

function compareadv() {
	const usuarioadv= Number(document.getElementById("caixaentrada").value)
	usuariopalpites.push(" " + usuarioadv);
	document.getElementById("palpites").innerHTML=usuariopalpites;
	tentativas++; 
	document.getElementById("tentativas").innerHTML=tentativas;
	if(tentativas < maxPalpites){
		if(usuarioadv > computadorAdv) {
			if(usuarioadv < alto)alto = usuarioadv;
	document.getElementById("textosaida").innerHTML="Seu palpite está muito alto";
	document.getElementById("caixaentrada").value="";
	
}else if(usuarioadv < computadorAdv) {
	if(usuarioadv > baixo)baixo = usuarioadv;
	document.getElementById("textosaida").innerHTML="Seu palpite está muito baixo";
	document.getElementById("caixaentrada").value="";
}else {
	document.getElementById("textosaida").innerHTML="Acertou!Você conseguiu em " + tentativas + " tentativas ";
	gameEnded();

	}
}else{
			if(usuarioadv> computadorAdv) {
	document.getElementById("textosaida").innerHTML="VOCÊ PERDEU!,<br>O número era " + computadorAdv;
				gameEnded();
	
	
}else if(usuarioadv < computadorAdv) {
	document.getElementById("textosaida").innerHTML="VOCÊ PERDEU!,<br>O número era " + computadorAdv;
	gameEnded();
	
}else {
	document.getElementById("textosaida").innerHTML="Acertou!Você conseguiu em " + tentativas + " tentativas ";
	gameEnded();

	}
}
	updateRange();
	}

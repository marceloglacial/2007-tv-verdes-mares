<!--
// funзгo para aumentar e diminuir o texto do corpo da notнcia
var Tamanho=100;
function TextoTamanho(funcao)
{
	if(funcao=="aumenta")
	{
		if(Tamanho<150)
		{
			Tamanho=Tamanho+20;
			document.getElementById("Texto").style.fontSize = Tamanho + "%";
		}
	}
	if(funcao=="diminui")
	{
		if(Tamanho>100)
		{
		Tamanho=Tamanho-20;
		document.getElementById("Texto").style.fontSize = Tamanho + "%";			  
		}
	}
}
//-->
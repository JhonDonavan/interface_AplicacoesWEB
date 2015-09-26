<script type="text/javascript">
function validar()
{
	var f = document.forms[0];
	if (f.nome.value == '')
	{
		alert('O campo NOME não foi preenchido.');
		f.nome.focus();
		//f.nome.setbackground(Color.RED);
		//<campo>.setForeground(Color.RED); 
		return false;
	}
	else if(f.sobrenome.value == '')
		{
		alert('O campo sobre nome não foi preenchido');
		f.sobrenome.focus();
		return false;
		}
	else if (f.cpf.value == '')
	{
		alert('O campo CPF não foi preenchido.');
		f.cpf.focus();
		return false;
	}
	return true;
}

function limpa()
{
	var f = document.forms[0];
	
	if(((f.nome.value && f.sobrenome.value && f.cpf.value && f.data_nasc.value && f.end.value && f.tel.value) != ' '))
	{
		f.nome.value = '';
		f.sobrenome.value = '';
		f.cpf.value = '';
		f.data_nasc.value = '';
		f.end.value = '';
		f.tel.value = '';
		f.nome.focus();
	}
	
}
</script>
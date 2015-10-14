function validar_campos()
{
	var f = document.forms[0];
	
	if (f.cpf.value == ''){
		alert('O campo CPF não foi preenchido.');
		f.cpf.focus();
		//cpf.setForeground(Color.RED);
		return false;
	}
	else if (f.nome.value == ''){
		alert('O campo nome não foi preenchido.');
		f.nome.focus();
		f.nome.style.border='solid 1px red';
		return false;
	}
	else if(f.sobrenome.value == ''){
		alert('O campo sobre nome não foi preenchido');
		f.sobrenome.focus();
		return false;
		}
	else if (f.tel.value == ''){
		alert('O campo telefone não foi preenchido');
		f.tel.focus();
		return false;
	}
	else if(f.end.value == ''){
		alert('O campo endereço não foi preenchido');
		f.tel.focus();
		return false;
		
	}
	
	return true;
}

function limpa()
{
	var f = document.forms[0];
	
	if(((f.nome.value || f.sobrenome.value || f.cpf.value || f.data_nasc.value || f.telefoneC.value ||
	     f.telefoneR.value || f.email.value || f.numero.value || f.complemento.value || f.cep.value || f.cep2.value || 
		 f.bairro.value || f.cidade.value) != ''))    
	{
		f.nome.value = '';
		f.sobrenome.value = '';
		f.cpf.value = '';
		f.data_nasc.value = '';
		f.telefoneC.value = '';
		f.telefoneR.value = '';
		f.email.value = '';
		f.end.value = '';
		f.tipo.value ='Tipo';
		f.numero.value = '';
		f.complemento.value = '';
		f.cep.value = '';
		f.cep2.value = '';
		f.bairro.value = '';
		f.cidade.value = '';
		f.UF.value = 'RJ';
		f.cpf.focus();
	}
}

function verificarDados(){
	return true;
}




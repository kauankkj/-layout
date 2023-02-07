/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i) {
    const tel = i.value;
    /*verifica se não é numero*/
    if (isNaN(tel[tel.length - 1])) {
        i.value = tel.substring(0, tel.length - 1);
        return;
    }
    i.setAttribute("maxlength", "16");

    /*inclui mascara do telefone*/
    if (tel.length == 1) {
        i.value = "(" + i.value;
    }
    if (tel.length == 3) {
        i.value = i.value + ") ";
    }
    if (tel.length == 6) {
        i.value = i.value + " ";
    }
    if (tel.length == 11) {
        i.value = i.value + "-";
    }
}
function mascaraCPF(i) {
    const CPF = i.value;
    /*verifica se não é numero*/
    if (isNaN(CPF[CPF.length - 1])) {
        i.value = CPF.substring(0, CPF.length - 1);
        return;
    }
    i.setAttribute("maxlength", "14");

    /*inclui mascara do telefone*/
    if (CPF.length == 3) {
        i.value = i.value + ".";
    }
    if (CPF.length == 7) {
        i.value = i.value + ".";
    }
    if (CPF.length == 11) {
        i.value = i.value + "-";
    }

}
function mascaraCNPJ(i) {
    const CNPJ = i.value;
    /*verifica se não é numero*/
    if (isNaN(CNPJ[CNPJ.length - 1])) {
        i.value = CNPJ.substring(0, CNPJ.length - 1);
        return;
    }
    i.setAttribute("maxlength", "18");

    /*inclui mascara do telefone*/
    if (CNPJ.length == 2) {
        i.value = i.value + ".";
    }
    if (CNPJ.length == 6) {
        i.value = i.value + ".";
    }
    if (CNPJ.length == 10) {
        i.value = i.value + "/";
    }
    if (CNPJ.length == 15) {
        i.value = i.value + "-";
    }
}




function validar() {
    var nome = FormUser.nome.value;
    var email = FormUser.email.value;
    var tel  = FormUser.fone.value;
    var endereco = FormUser.end.value;
    var tipoCPF = FormUser.cpf.value;
    var tipoCNPJ = FormUser.cnpj.value;
    var senha = FormUser.senha.value;
    var confSenha = FormUser.senha.value;
    

    if(nome == "" || nome.length <= 3 ){
        alert("informe o nome completo");
        FormUser.nome.focus();
        return false;
    }
    if( email  == "" || email.length <= 10 ){
        alert("informe o email correto");
        return false;
    }
    if( tel  == "" || tel.length <= 11 ){
        alert("informe o tel correto");
        FormUser.fone.focus();
        return false;
    }
    if(endereco == "" || end.length <= 11 ){
        alert("informe o endereço completo");
        FormUser.tpPessoa.focus();
        return false;
    }
    if(endereco == "" || endereco.length <= 11 ){
        alert("informe o endereço completo");
        FormUser.end.focus();
        return false;
    }
    if(tipoCPF == "" || tipoCNPJ == ""){
        alert("selecione um documento");
        return false;
    }
    if(tipoCPF != "" && tipoCNPJ == ""){
        if(tipoCPF.length != 14){
            alert("CPF incorreto!");
            FormUser.cpf.focus();
            return false;
        }
        if(tipoCNPJ != "" && tipoCPF == ""){
            if(tipoCNPJ.length != 18){
                alert("CNPJ incorreto!");
                FormUser.cnpj.focus();
                return false;
            }
    }
      
}
if(senha == "" || senha.length <= 3 ){
    alert("senha não atende aos requisitos");
    FormUser.senha.focus();
    return false;
}
if(confSenha != confSenha) {
    alert("senhas não conferem");
    FormUser.senha.focus();
    return false;
}
}
       
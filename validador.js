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
    
    if(nome == "" || nome.length <= 3 ){
        alert("informe o nome completo");
        FormUser.nome.focus();
        return false;
    }
}
       
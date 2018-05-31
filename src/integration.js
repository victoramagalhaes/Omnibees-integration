// Função para executar a cada mudança.
function GetDateChange(){
    var $checkIn = document.getElementById("check-in").value;
    var $checkOut = document.getElementById("check-out").value;
// Retornando data no formato da API.
function transformData(transform){
    var dia = transform.slice(8,11);
    var mes = transform.slice(5,7);
    var ano = transform.slice(0,4);
    var data = dia+mes+ano;
    return data;
}
    // Funções que retornam a data de CI/CO.
    var dataEntrada = transformData($checkIn);
    var dataSaida = transformData($checkOut);

// Adultos Select.
    var $adultos = document.getElementById("inputadulto");
    var adultosSelecionados = $adultos.options[$adultos.selectedIndex].value;
// Crianças Select.
    var $kids = document.getElementById("inputkids");
    var kidsSelecionados = $kids.options[$kids.selectedIndex].value;
}
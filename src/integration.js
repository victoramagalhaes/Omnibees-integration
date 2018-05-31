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
// Promo Code.
    var $promocode = document.getElementById("promocode").value;
// Integração com a API
    var CheckIn = "CheckIn="+dataEntrada;
    var CheckOut = "CheckOut="+dataSaida;
    var codpromo = "Code="+$promocode;
    var nAdultos = "ad="+adultosSelecionados;
    var kidsAge = "ag="+"5"
    var nKids = "ch="+kidsSelecionados;+"5";
    var apiInt = "&"+CheckIn+"&"+CheckOut+"&"+codpromo+"&"+nAdultos+"&"+kidsAge;
    // console.log(apiInt)
    window.location.href="https://myreservations.omnibees.com/default.aspx?q=6655&NRooms=1&"+apiInt;""
}
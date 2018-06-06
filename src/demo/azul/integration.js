// Opções do Datepicker Jquery.
jQuery(document).ready(function($) {
  $( function() {
    var dateFormat = "dd/mm/yy",
      checkin = $( "#checkin" )
        .datepicker({
          onSelect: function () {
            var toDate = $(this).datepicker('getDate');
            toDate.setDate(toDate.getDate()+1)
            $("#checkout").datepicker("setDate", toDate);
        },
          minDate:0,
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1,
          dateFormat: 'dd/mm/yy',
          dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
          dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
          dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
          monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
          monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
        })
        .on( "change", function() {
          checkout.datepicker( "option", "minDate", getDate( this ) );
        }),
        checkout = $( "#checkout" ).datepicker({
        minDate:1,
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
      })
      .on( "change", function() {
        checkin.datepicker( "option", "maxDate", getDate( this ) );
      });
 
      function getDate( element ) {
        var date;
        try {
          date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
          date = null;
        }
        return date;
      }
  } );
});
// Quando o valor do Check In for alterado setar o numero de adultos default. 
var $adultos = document.getElementById("inputadulto");
function onChangeCheckIn($adultos){
  setTimeout(function(){
    $adultos.selectedIndex = 2;
  },2000)
}
// Quando o valor do Check In for alterado setar o numero de crianças default.    
var $kids = document.getElementById("inputkids");
function onChangeCheckInKids($kids){
  setTimeout(function(){
    $kids.selectedIndex = 0;
  },2000)
} 
// Função para executar a cada mudança.
function GetDateChange(){
    var $checkIn = document.getElementById("checkin").value;
    var $checkOut = document.getElementById("checkout").value;
// Retornando data no formato da API.
function transformData(transform){
    var dia = transform.slice(0,2);
    var mes = transform.slice(3,5);
    var ano = transform.slice(6,10);
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
    var apiInt = "&"+CheckIn+"&"+CheckOut+"&"+codpromo+"&"+nAdultos+"&"+nKids;
    // console.log(apiInt)
    window.location.href="https://myreservations.omnibees.com/default.aspx?q=6655&NRooms=1"+apiInt;
}
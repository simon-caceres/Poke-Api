
$(document).ready(function(){
    // $('#formulario').submit(function (evento) {
    //     evento.preventDefault();
        for(let index = 1; index <= 20; index++) {
          const Numero = index;
        $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${Numero}`,
           }).done(function (data) {
          
          $(".Imprimir").append(`<div class="col mb-4">
          <div class="card bg-dark">
          <div class="card-body">
            <h5 class="card-title Pokename"> Nombre: ${data.name}</h5>
            <img src="${data.sprites.front_default}" class="card-img-top pokeImg" alt="...">
            <p class="card-text Pokename2">Habilidad: ${data.abilities[0].ability.name}</p>
          </div>
        </div>
        </div>`);   
      });  
     };
     $('#pokenumero').keyup(function(){
      var nombres = $('.card-title');
      var buscando = $(this).val();
      var item='';
      for( var i = 0; i < nombres.length; i++ ){
          item = $(nombres[i]).html().toLowerCase();
           for(var x = 0; x < item.length; x++ ){
               if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                   $(nombres[i]).parents('.card').show(); 
               }else{
                    $(nombres[i]).parents('.card').hide();
               }
           }
      }
   });
});

let page = 0;
let large = 20;

document.getElementById('Next').addEventListener('click', function () {
  page += 20
  large += 20
  $('.Imprimir').html('');
  for(let index = `${page}` ; index <= `${large}`; index++) {
    const Numero = index;
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${Numero}`,
     }).done(function (data) {
    
    $(".Imprimir").append(`<div class="col mb-4">
    <div class="card bg-dark">
    <div class="card-body">
      <h5 class="card-title Pokename"> Nombre: ${data.name}</h5>
      <img src="${data.sprites.front_default}" class="card-img-top pokeImg" alt="...">
      <p class="card-text Pokename2">Habilidad: ${data.abilities[0].ability.name}</p>
    </div>
  </div>
  </div>`);   
});  
};
});
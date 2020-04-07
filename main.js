
$(document).ready(function(){
    // $('#formulario').submit(function (evento) {
    //     evento.preventDefault();
        for(let index = 1; index <= 20; index++) {
          const Numero = index;
        $.ajax({
          url: `https://pokeapi.co/api/v2/pokemon/${Numero}`,
           }).done(function (data) {
          
          $(".Imprimir").append(`<div class="col mb-4">
          <div class="card bg-light border-primary">
          <div class="card-body">
            <h5 class="card-title text-center Pokename">  ${data.name}</h5>
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
   $('.btn').on('click', function(){
    let Dato = $('#pokenumero').val();
    $('.Imprimir').html('');
    async function AsyncSearch(){
      try
      {
          //se realiza la primera peticion a la api de pokemons
          
          let response_1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Dato}`);
          let pokemon_1  = await response_1.json();
  
         
          let respuesta = 
          `<div class="col mb-4">
          <div class="card bg-light border-primary">
          <div class="card-body">
            <h5 class="card-title text-center Pokename"> ${pokemon_1.name}</h5>
            <img src="${pokemon_1.sprites.front_default}" class="card-img-top pokeImg" alt="...">
            <p class="card-text Pokename2">Habilidad: ${pokemon_1.abilities[0].ability.name}</p>
          </div>
        </div>
        </div>`
  
          document.getElementById("Imprimir").innerHTML += respuesta;
    }
      catch(Error)
      {
          console.error(Error);
          document.getElementById("Imprimir").innerHTML = Error;
      }
    
  }
  AsyncSearch()
  });
   
});

let page = 1;
let large = 20;

document.getElementById('Next').addEventListener('click', function () {
  page += 20
  large += 20
  $('.Imprimir').html('');
  async function AsyncNext(){
    try
    {
        //se realiza la primera peticion a la api de pokemons
        for(let index = `${page}` ; index <= `${large}`; index++) {
          const Numero = index;
        let response_1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Numero}`);
        let pokemon_1  = await response_1.json();

       
        let respuesta = 
        `<div class="col mb-4">
        <div class="card bg-light border-primary">
        <div class="card-body">
          <h5 class="card-title text-center Pokename">  ${pokemon_1.name}</h5>
          <img src="${pokemon_1.sprites.front_default}" class="card-img-top pokeImg" alt="...">
          <p class="card-text Pokename2">Habilidad: ${pokemon_1.abilities[0].ability.name}</p>
        </div>
      </div>
      </div>`

        document.getElementById("Imprimir").innerHTML += respuesta;

    }
  }
    catch(Error)
    {
        console.error(Error);
        document.getElementById("Imprimir").innerHTML = Error;
    }
  
}
AsyncNext()
});

document.getElementById('Previous').addEventListener('click', function () {
  page -= 20
  large -= 20
  $('.Imprimir').html('');
    async function AsyncPrev(){
        try
        {
            //se realiza la primera peticion a la api de pokemons
            for(let index = `${page}` ; index <= `${large}`; index++) {
              const Numero = index;
            let response_1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${Numero}`);
            let pokemon_1  = await response_1.json();
    
           
            let respuesta = 
            `<div class="col mb-4">
            <div class="card bg-light border-primary">
            <div class="card-body">
              <h5 class="card-title text-center Pokename">  ${pokemon_1.name}</h5>
              <img src="${pokemon_1.sprites.front_default}" class="card-img-top pokeImg" alt="...">
              <p class="card-text Pokename2">Habilidad: ${pokemon_1.abilities[0].ability.name}</p>
            </div>
          </div>
          </div>`
    
            document.getElementById("Imprimir").innerHTML += respuesta;
    
        }
      }
        catch(Error)
        {
            console.error(Error);
            document.getElementById("Imprimir").innerHTML = Error;
        }
      
    }
    AsyncPrev()
});




$(function(){
    $('#formulario').submit(function (evento) {
        evento.preventDefault();
        var Numero = $('#pokenumero').val();
        console.log(Numero);
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${Numero}`,
        }).done(function (data) {
            console.log(data);
            $(".Imprimir").append(`<div class="text-center Pokename"><h2> Nombre: ${data.name}</h2></div>`);
            $(".Imprimir").append(`<div class="text-center pokeImg"><img src="${data.sprites.front_default}"/></div>`);
            $(".Imprimir").append(`<div class="text-center Pokename2"><h2> Peso: ${data.weight} KG </h2></div>`);

            $(".chartContainer").CanvasJSChart({ 
                title: { 
                  text: "Habilidades:" 
                }, 
                axisY: { 
                  title: "Valor", 
                  includeZero: false 
                }, 
                data: [ 
                { 
                  type: "column", 
                  toolTipContent: "{label}: {y}", 
                  dataPoints: [ 
                    { label: data.stats[0].stat.name, y: data.stats[0].base_stat }, 
                    { label: data.stats[1].stat.name, y: data.stats[1].base_stat }, 
                    { label: data.stats[2].stat.name, y: data.stats[2].base_stat }, 
                    { label: data.stats[3].stat.name, y: data.stats[3].base_stat }, 
                    { label: data.stats[4].stat.name, y: data.stats[4].base_stat }, 
                    { label: data.stats[5].stat.name, y: data.stats[5].base_stat }, 
                  ] 
                } 
                ] 
              });
             
            
        });
        

    });
});
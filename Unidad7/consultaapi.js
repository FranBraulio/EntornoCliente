function convertirATabla(pokemons) {
    $('#pokemonTable tbody').empty();
    pokemons.forEach(function(pokemon) {
      $.get(pokemon.url, function(data) {
        const fila = $("<tr></tr>").addClass("pokemonRow");
        const nombreCelda = $("<td></td>").text(data.name).addClass("pokemonName");
        const imagenCelda = $("<td></td>");
        const imagen = $("<img>").attr("src", data.sprites.front_default);
        
        imagenCelda.append(imagen);
        fila.append(nombreCelda, imagenCelda);
        $('#pokemonTable tbody').append(fila);
      });
    });
  }

  $(document).ready(function() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    $.get(url) 
    .done(function(data){
      console.log(data);
      convertirATabla(data.results);
    })
    .fail(function(){
      const span = $("<span></span>").addClass("error").text("Error");
      $('#body').append(span);
      alert("Error");
    })
    .always(function () {
      console.log("Petición completada.");
    });

    // Filtrar Pokémon en la tabla
    $("#searchInput").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      
      $(".pokemonRow").filter(function() {
        $(this).toggle($(this).find(".pokemonName").text().toLowerCase().indexOf(value) > -1);
      });
    });
  });

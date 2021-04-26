tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    });

    const pokemones = [];
    const cargarTabla = ()=>{

      //1.Obtener una referencia de la tabla 
      let tbody = document.querySelector("#tbody-tabla");
      //Eliminar contenido tbody
      tbody.innerHTML = "";
      //2.Recorrer lista pokemons
      for(i=0; i<pokemones.length; ++i){
        let p = pokemones[i];

        //3.Por cada pokemon generar un tr
        let tr = document.createElement("tr");
        //4.Por cada atributo generar un td de la tabla
        let tdNro = document.createElement("td")
        let tdNombre = document.createElement("td")
        let tdTipo = document.createElement("td")
        let tdDescripcion = document.createElement("td")
        let tdAcciones = document.createElement("td")

        //Definir lo que va en la tabla
        tdNro.innerText = i + 1;
        
        tdNombre.innerText = p.nombre;
        
        let tipo = document.createElement("i")
        if (p.tipo == "1"){
          //Tipo planta <i class="fas fa-leaf"></i>
          tipo.classList.add("fas","fa-leaf","text-success", "fa-3x");
        }else if (p.tipo == "2"){
          //Tipo fuego <i class="fas fa-fire"></i>
          tipo.classList.add("fas","fa-fire", "fa-3x","text-danger");
        }else if (p.tipo == "3"){
          //Tipo agua <i class="fas fa-tint"></i>
          tipo.classList.add("fas","fa-tint", "fa-3x", "text-primary");
        }else if (p.tipo == "4"){
          //Normal <i class="fas fa-bullseye">
          tipo.classList.add("fas","fa-bullseye", "fa-3x","text-secondary");
        }else if (p.tipo == "5"){
          //electrico <i class="fas fa-bolt"></i>
          tipo.classList.add("fas","fa-bolt", "fa-3x", "text-warning");

        }
        tdTipo.classList.add("text-center");
        tdTipo.appendChild(tipo);

        tdDescripcion.innerHTML = p.descripcion;
        // todo: acciones
        //5.Agragar los td al tr
        tr.appendChild(tdNro)
        tr.appendChild(tdNombre)
        tr.appendChild(tdTipo)
        tr.appendChild(tdDescripcion)
        tr.appendChild(tdAcciones)
        //6.Agregar el tr a la tabla
        tbody.appendChild(tr);
      }
      
    }

    document.querySelector("#registrar-btn").addEventListener("click", ()=>{
        let nombre = document.querySelector("#nombre-txt").value;
        let tipo = document.querySelector("#tipo-select").value;
        let legendario = document.querySelector("#legendario-si").checked;
        let descripcion = tinymce.get("descripcion-txt").getContent();  
        
        let pokemon = {};
        pokemon.nombre = nombre;
        pokemon.tipo = tipo;
        pokemon.legendario = legendario;
        pokemon.descripcion = descripcion;
        pokemones.push(pokemon);
        cargarTabla();
        Swal.fire("Resultado exitoso!", "Pokemon registrado", "info")
    })
import { createStore } from 'vuex'
//Importar el JSON con la Base de Datos temporal
import AnimalsJ from "/server/data/dbIamInDanger.json"

export default createStore({
  state: {
    animalsDB: AnimalsJ,
    image_input: document.getElementById("image_input"),
    photoLink:"",
    uploaded_imageURL: "",
    nombreAPI:"",
    resultadoAPI:0,
    clickedButton:0,
    animal:[],
    animalIndex:null,
  },
  getters: {
    photoLink(state){return state.photoLink},
    uploaded_imageURL(state){return state.uploaded_imageURL},
   
  },
  mutations: {
    setUploaded_Image(state,path){
      state.image_input = path;
    },
    botonLocal(state){
      state.clickedButton=1;
    },
    botonLink(state){
      state.clickedButton=2;
    },
    uploaded_imageURL(state, ruta){
      //Guarda la ruta de la imagen
      state.uploaded_imageURL = ruta;
    },
    animalIndex(state,nombre){
      //Estatus inical animal no en la lista
      state.animalIndex = -1
      for(let i=0;i<state.animalsDB.length;i++){
        if(state.animalsDB[i].animalInDanger===nombre){
          //Si el animal está en la lista, guardar su index
          state.animalIndex = i
        }
      }
    },
    
    pullAnimalData(state){
      //Datos del JSON
      var id = state.animalIndex
      if(state.animalIndex >=0){
        state.animal.push({
          especie: state.animalsDB[id].animalInDanger,
          nombreCientifico:state.animalsDB[id].animalSciName,
          familia:state.animalsDB[id].animalFamily,
          longitud:state.animalsDB[id].animalSize,
          peso:state.animalsDB[id].animalWeight,
          habitat:state.animalsDB[id].animalEcosystem,
          alimentacion:state.animalsDB[id].animalFeed,
          poblacion:state.animalsDB[id].animalPopulation,
          depredadores:state.animalsDB[id].animalPredators,
          causaAmenzada:state.animalsDB[id].animalDangers,
          grupo1:state.animalsDB[id].animalCareMexico,
          grupo2:state.animalsDB[id].animalCareGlobal,
        })
      }
      
    },
    
  },
  actions: {
    async AIResults({commit}){
      var id =6
      let url = `https://pokeapi.co/api/v2/pokemon/${id}`
      const rest = await fetch(url)
      const results = await rest.json();
      //Dispatch Crear method 
      console.log(results)
      //Entrada del nombre Resultado del AI
      commit("animalIndex","Tortuga marina")
      this.dispatch("showResults")
    },
    createCardPhoto({commit}){
      //Crecion del Div para desplegar imagen local
      const contenedor = document.getElementById("contenedorImagen")
      const card = document.createElement("div")
      card.classList.add("display_image") //añade class
      contenedor.appendChild(card) //anida card dentro de Div Contenedor
      const imagen = document.createElement("img")
      card.appendChild(imagen)
      //Seleccionar fuente dependiendo del boton clickeado
      switch(this.state.clickedButton){
        case 1:
          //Imagen Local - asignación de la ruta
          imagen.src = this.state.uploaded_imageURL
        break;
        case 2:
          imagen.src= this.getters.photoLink
        break;
      }
    },

    showResults({commit}){
      //Desplegar imagen e Info del animal
      this.dispatch("createCardPhoto")
      commit('pullAnimalData')
      this.dispatch("createCardInfo")
    },
    

  

    createCardInfo(state){
      //Si el animal está en la base de datos, imprimir información
      if(Object.keys(this.state.animal).length>0){
        const contenedor = document.getElementById("contenedorInfo")
        const textCard = document.createElement("div")
        textCard.classList.add("display_Info") //añade class
        contenedor.appendChild(textCard) //anida card dentro de Div Contenedor
        //etiqueta #1
        const label2 = document.createElement("label") 
        label2.classList.add("resultNegativo")
        textCard.appendChild(label2)
        label2.textContent = "ESPECIE EN PELIGRO DE EXTINCIÓN"
        //etiqueta #2
        const etiqueta2 = document.createElement("p") 
        textCard.appendChild(etiqueta2)
        etiqueta2.textContent = "Especie: "+ this.state.animal[0].especie
          //etiqueta #3
        const etiqueta3 = document.createElement("p")
        textCard.appendChild(etiqueta3)
        etiqueta3.textContent = "Nombre Científico: " +this.state.animal[0].nombreCientifico
        //etiqueta #4
        const etiqueta4 = document.createElement("p")
        textCard.appendChild(etiqueta4)
        etiqueta4.textContent = "Familia: " +this.state.animal[0].familia
          //etiqueta #5
        const etiqueta5 = document.createElement("p")
        textCard.appendChild(etiqueta5)
        etiqueta5.textContent = "Longitud: " +this.state.animal[0].longitud
        //etiqueta #6
        const etiqueta6 = document.createElement("p")
        textCard.appendChild(etiqueta6)
        etiqueta6.textContent = "Peso: " +this.state.animal[0].peso
          //etiqueta #7
        const etiqueta7 = document.createElement("p")
        textCard.appendChild(etiqueta7)
        etiqueta7.textContent = "Habitat: " +this.state.animal[0].habitat
        //etiqueta #8
        const etiqueta8 = document.createElement("p")
        textCard.appendChild(etiqueta8)
        etiqueta8.textContent = "Alimentación: " +this.state.animal[0].alimentacion
          //etiqueta #9
        const etiqueta9 = document.createElement("p")
        textCard.appendChild(etiqueta9)
        etiqueta9.textContent = "Población: " +this.state.animal[0].poblacion
        //etiqueta #10
        const etiqueta10 = document.createElement("p")
        textCard.appendChild(etiqueta10)
        etiqueta10.textContent = "Depredadores: " +this.state.animal[0].depredadores
          //etiqueta #11
        const etiqueta11 = document.createElement("p")
        textCard.appendChild(etiqueta11)
        etiqueta11.textContent = "Causa de Amenaza: " +this.state.animal[0].causaAmenzada
        //etiqueta #12
        const etiqueta12 = document.createElement("p")
        textCard.appendChild(etiqueta12)
        etiqueta12.textContent = "Grupo de Apoyo: " +this.state.animal[0].grupo1
          //etiqueta #13
        const etiqueta13 = document.createElement("p")
        textCard.appendChild(etiqueta13)
        etiqueta13.textContent = "Grupo de Apoyo: " +this.state.animal[0].grupo2
      }else{
        //Animal no en la base de datos
        const contenedor = document.getElementById("contenedorInfo")
        const textCard = document.createElement("div")
        textCard.classList.add("display_Info") //añade class
        contenedor.appendChild(textCard) //anida card dentro de Div Contenedor
        //etiqueta #1
        const label2 = document.createElement("label") 
        textCard.appendChild(label2)
        label2.classList.add("resultPositivo")
        label2.textContent = "Esta especie no está en nuestra base de datos"
      }
    },

    previewFile({commit}) {
      const preview = document.getElementById("imagenImg");
      const file = document.getElementById("inputImagen").files[0];
      const reader = new FileReader();
      reader.addEventListener("load", function () {
          // convierte la imagen a una cadena en base64
          preview.src = reader.result;
          preview.height=200;
          //Guarga la ruta de la imagen en el State 
          commit("uploaded_imageURL",preview.src) ;
      }, false);
      if (file) {
          reader.readAsDataURL(file);
      }
    }

    
    


  },
  modules: {
  }
})


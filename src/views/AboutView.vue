<template>
  <div class="about">
    <Header/>  

      <div class="aboutBody">
        
        <div class="sTitulos">
            <p class="TituloAbout">About Us</p >
            <p class="TituloWeb">AI'm in Danger?</p>
        </div>

        <div class="sObjetivos">
          <div class=AboutUsentrada>
            <p class="TituloObjetivo">OBJETIVO</p>
            <p>Es un proyecto que intenta utilizar la tecnología de Microsoft Azure (IA), que pueda ayudar a la biología marina, y además de poder reconocer de una manera más sencilla y eficaz a un animal marítimo en peligro de extinción o que no este en peligro.</p>
            <p>También brindara información general a la persona sobre del animal subido y deseado</p>  
          </div>
          <img src="../assets/logo3.png">
        </div>


        <div class="sMision">
          <img src="../assets/ImagenAbout1.png" style="float:left" width="200">
          <div class="seccion2">
            <p class="TituloObjetivo2">MISION</p>
            <p>Ayudar a la preservación  de las especies marinas. </p>
            <p>“Océanos sanos y un mundo libre de amenazas e impactos humanos negativos para los Animales Maritimos”</p>
          </div>
          <img src="../assets/ImagenAbout1.png" style="float:right" width="200">
        </div>


        <div class="sEquipo">
            <p class="TituloObjetivo3">INTEGRANTES</p>
            <p>Hector Gerardo Bravo (Líder)</p>
            <p>Maria Oralia Hernandez Salinas</p>
            <p>Luis Eduardo Hernandez </p>
            <p>Santiago Quintana</p>
            <p>Erick Enrique Romero Zuñiga</p>
        </div>

      </div>
 
    <Footer/>
  </div>
</template>


<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default {
  name: 'About',
  components: {
    Header,
    Footer,
}
}
</script>
<style> 


.aboutBody{
  display: flex;
  flex-direction: column;
  align-items: center;
}


.aboutBody .sObjetivos{
  display:inline-flex;
  flex-wrap: wrap;

}

.aboutBody .sObjetivos .AboutUsentrada{
  width: 600px;
  padding-left: 15px;
}

.aboutBody .sObjetivos .AboutUsentrada p{
  text-align: center;
}

.aboutBody .sObjetivos .AboutUsentrada p {
  margin-top: 0.5em
}

.aboutBody .sObjetivos img{
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.aboutBody .sMision{
  display: inline-flex;
  width: 850px;
}

.TituloWeb{
  font-size: 20px;
  font-weight: 700;
  color: #FA824C;
}
.TituloAbout{
  font-size: 30px;
  font-weight: 800;
  color: #FA824C;   
}
.TituloObjetivo{
  font-size: 20px;
  font-weight: 800;
  color:black;
  background-position: center center;
  background-repeat: no-repeat;
}

.TituloObjetivo2{
  font-size: 20px;
  font-weight: 800;
  color:black;
  background-position: center center;
  background-repeat: no-repeat;
}

.seccion2{
  display: block;
}

.TituloObjetivo3{
  font-size: 20px;
  font-weight: 800;
  color:black;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Responsive Design */
  @media screen and (max-width:700px){
    .aboutBody{
      width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    .aboutBody .sObjetivos{
      width: 400px;
    }

    .aboutBody .sMision{
      width: 400px;
    }

    .aboutBody .sMision img{
      display: none;
    }

    .sEquipo{
      padding-top: 10px;
      padding-bottom: 10px;
    }

  }


</style>


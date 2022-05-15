<template>
  <div class="home">
    <Header/>
    <ImageInput/>
    <!-- <Bot/> -->
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import ImageInput from "../components/ImageInput.vue"
import Bot from "../components/Bot.vue"


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header,
    Footer,
    ImageInput,
    Bot,

  }
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700');

  *{
    font-family: Poppins;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .home h2{
    font-size:larger;
  }

  

  header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    background-color: #00bbf9;
    color: white;
    font-weight: 500;
  }

  header .Logo-Marca{
     display: flex;
     align-items: center;
     margin-left: 10px;
  }

  nav {
  padding: 30px;
}

  nav a {
    font-weight: bold;
    color:  white;
  }

  nav a.router-link-exact-active {
    color: #2c3e50;
  }


  /*ANIMACIÓN FOOTER*/
  footer {  
    background-image: url("https://webdevtrick.com/wp-content/uploads/water-wave-blue.png");
    -moz-background-clip:content-box;
    -o-background-clip: content-box;
    -webkit-background-clip: content-box;
    background-clip: content-box;
    background-color: burlywood;
    color:#42b983;
    text-shadow: 0px 0px rgba(255, 255, 255, 0.06);
    animation: wave-animation 1s infinite linear, loading-animation 10s infinite linear alternate;
    background-size: 200px 100px;
    background-repeat: repeat-x;
    opacity: 1;

    display: flex;
    justify-content:space-around;
    color: #4244b9;
    padding: 0;
  }
  
  @keyframes wave-animation {
    0% {
      background-position: 0 bottom;
    }
    100% {
      background-position: 200px bottom;
    }
  }
  
  @keyframes loading-animation {
    0% {
      background-size: 200px 0px;
    }
    100% {
      background-size: 200px 200px;
    }
  }
  /*TERMINA ANIMACIÓN*/

  footer p{
    font-size: .8rem;
  }

  footer img{
    filter: grayscale(200%);
  }

  footer ul{
    list-style-type: none;
    text-align: center;
  }

  footer a{
    text-decoration: none; 
    font-size: .8rem;
  }


  .Otrasorg ul{
    font-weight: 600;
    color:#023e8a
  }

  .Otrasorg a{
    font-weight: 600;
    color:#023e8a;
  }
  
  .home, .about, .resultsPage{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .home .mensajeInicial{
    width: 570px;
    padding-bottom: 20px;
  }

  .mensajeInicial p + p{
    margin-top: 1.5em;
  }

  .letritas{
    font-size:x-small;
    color: #2c3e50;
  }

  .home img {
    text-indent: -10000px
  }

  .home .imageInput{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .home .imageInput input{
    color:none;
    margin-left: auto;
    margin-right: auto;
  }

  .home .imageInput label{
    font-weight: 700;
  }

  .home .imageInput .linkImageUpload{
    width: 350px;
  }

  .home .imageInput .uploadButton{
    display: inline-flex;
    text-align: center;
    background-color: #023e8a;
    padding: 0;
    border: none;
    outline: none;
    overflow: hidden;
    font-family: "Quicksand",sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 155px;
    border-radius: .35rem;
    margin-left: auto;
    margin-right: auto;
    gap: 5px;
    padding: 7px;
  }

  .home .imageInput .cloudUploadButton{
    display: inline-flex;
    text-align: center;
    background-color: #023e8a;
    padding: 0;
    border: none;
    outline: none;
    overflow: hidden;
    font-family: "Quicksand",sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 135px;
    border-radius: .35rem;
    margin-left: auto;
    margin-right: auto;
    gap: 3px;
    padding: 7px;
  }

  .home .imageInput button:hover{
    background-color: #41b883;
  }

  .uploadText, .uploadIcon{
    display: inline-flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }

  .bot{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  .bot .telegram{
    display: flex;
    flex-direction: column;
    
  }

  /* Responsive Design */
  @media screen and (max-width:700px){
    .home .mensajeInicial{
      width: 400px;
      margin-left: auto;
      margin-right: auto;
    }

    .mensajeInicial p + p{
      margin-top: 0.5em;
    }
  }




</style>

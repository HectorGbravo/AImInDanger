<template>
  <div class="resultsPage">
    <Header/>
    
    <AIResult/>

    <Footer/>
  </div>
</template>


<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import AIResult from "@/components/AIResult.vue"

export default {
  name: 'Results',
  components: {
    Header,
    Footer,
    AIResult
}
}
</script>

<style>

.AIResults{
    display: flex;
    flex-wrap: wrap;
    height: min-content;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}

.AIResults .contenedorImagen{
  display: flex;
  width: 400px;
  height: 300px;
  object-fit: contain;
}

.AIResults .contenedorImagen .display_image{
    display: flex;
    width: 370px;
    height: 300px;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
  }

  .contenedorInfo{
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }´

  .display_Info{
    display:grid;
    grid-template-columns: max-content max-content;
  }

.resultNegativo{
  display: flex;
  justify-items: flex-start;
  font-weight: 700;
  color: brown;
}

.resultPositivo{
  display: flex;
  justify-items: flex-start;
  font-weight: 700;
  color: rgb(77, 165, 42);
}

.contenedorInfo p{
  text-align: left;
}



/* Responsive Design */
  @media screen and (max-width:800px){

    .contenedorImagen img{
      padding-top: 10px;
      width: 350px;
      height: 320px;
    }
    .contenedorInfo{
      padding-top: 15px;
      width: 400px;
    }

    p + p{
      margin-top: 0em;
    }
  }

</style>



<template>
    <div class="AIResults" id="AIResults">
        <div class="contenedorImagen" id="contenedorImagen"> 
            
        </div>
        <div class="contenedorInfo" id="contenedorInfo"> </div>
    </div>
</template>

<script>
export default { name: 'AIResult',
mounted(){    
    this.$store.dispatch('AIResults');
}

}
</script>
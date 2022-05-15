<template>

<div class="imageInput">
    

    <div class="mensajeInicial">
        <h2>AI'm in Danger?</h2>
        <p>Te ayuda a identificar a los animales marinos en peligro de extinción mediante una imagen y te mostrará información relevante de ellos.</p> 
        <p>¡Ayúdanos a protegerlos! </p>
    </div>

    <h2>Analizador de Animales Marinos</h2>
    <label>Selecciona una imagen</label>

    <div>
        <input type="file" @change="$store.dispatch('previewFile')" id="inputImagen" accept="image/jpeg, image/png, image/jpg"><br>
        <p class="letritas">*Tamaño límite de 4 MB</p>
        <img src="../assets/emtpyImage.svg" height="1px" alt=" " id="imagenImg" >
    </div>
   
    <!-- <div>
        <img src="" alt="" id="output">
        <input id="file-input" name="photo" type="file" accept="image/*" 
        onchange="var img = window.URL.createObjectURL(this.files[0]);
        document.getElementById('output').src = img;
        this.imagen = img;
        console.log(this.imagen);">
    </div> -->
    
    <router-link to="/results">
    <button class="uploadButton" @click="$store.commit('botonLocal')">
        <span class="uploadText">Upload Image</span>
        <span class="uploadIcon"><img src="../assets/photo-icon-w.svg" alt="upload-icon" width="25" height="25"></span>
    </button>
    </router-link>


    <label>o Introduza el URL de la Imagen</label>
    <input type="url" id="linkImageUpload" v-model="$store.state.photoLink" class="linkImageUpload">
    <router-link to="/results">
    <button class="cloudUploadButton" @click="$store.commit('botonLink')">
        <span class="uploadText">Upload Link</span>
        <span class="uploadIcon"><img src="../assets/link-icon-w.svg" alt="upload-icon" width="25" height="25"></span>
    </button>
    </router-link>

    


</div>
    
</template>

<script>
//Install avios
//npm install --save axios


export default { name: 'ImageInput',
data(){
    return{
        selectedFile: null
    }
},

methods:{
    onFileSelected(event){
        this.selectedFile = event.target.files[0]
        console.log(event)
    },
    
    previewFile() {
        const preview = document.getElementById("output");
        const file = document.getElementById("inputImagen").files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            // convierte la imagen a una cadena en base64
            preview.src = reader.result;
        }, false);
        console.log("e")
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
},


}
</script>
<template>
    <header>      
       
        <div class="Logo-Marca">
            <a href="/" class="logo">
            <img src="../assets/logo3.png" alt="Logo" width="100" height="100">
            </a>

            <div class="texto">
                <div>AI'm in danger?</div>
            </div>
           
        </div>
        

        <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </nav>
        <router-view/>

    </header>
    
</template>


<script>
export default { name: 'Header'}
</script>
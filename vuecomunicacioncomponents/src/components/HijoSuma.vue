<template>
    <div>
        <br/>
        <h2 style="color:blue">
            Numero hijo: {{ nuevohijo }}
        </h2>
        <button @click="sumarnumero()">
            Sumar {{ nuevohijo }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "HijoSuma",
        props: ["nuevohijo"],
        methods: {
            sumarnumero (){
        
                this.$emit("sumarnumerin", this.nuevohijo);
            }
            
        }
    }
</script>
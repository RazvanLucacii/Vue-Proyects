<template>
    <div>
        <h1>Cine Component</h1>
        <img :style="{width: '250px', height: '250px'}" src="./../assets/images/cine.jpg" />
    </div>
</template>

<script>
export default {
    name: "CineComponent"
}
</script>

<style>
    img {
        width: "150px";
        height: "250px";
    }
</style>
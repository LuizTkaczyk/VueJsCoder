<template>
  <button class="button" :class="{double, triple, operation}" @click="$emit('onClick', label)">
      {{label}}
  </button>
</template>

<script>
export default {
    props:{
        label:{},
        operation:{type: Boolean},
        double : { type: Boolean},
        triple: {type: Boolean}
    }

}
</script>

<style>

:root{
    --bg-button:#ffdbdb;
    --border-button: solid 1px #888;
}
.button{
    font-size:1.4em ;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);

    outline: none;
}

.button:active{
    background-color: #ccc;

}
.button.double{
    grid-column: span 2;
}
.button.triple{
    grid-column: span 3;
}
.button.operation{
    background-color: rgba(255, 128, 0, 0.404);
    color: #fff;
}

.botton.operation:active{
    background-color: rgba(0, 0, 0, 0.705);
}
</style>
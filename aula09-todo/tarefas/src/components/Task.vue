<template>
  <div @click="$emit('taskStateChanged', task)" class="task" :class="stateClass">
    <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        //adicionando uma classe a task, como pending ou done, desse modo adicionando estilos deferentes (pending vem de App.vue)
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid rgb(112, 59, 59);
  background-color: red;
}
.done {
  color: white;
  border-left: 12px solid green;
  background-color: goldenrod;
  text-decoration: line-through;
}

.pending .close {
  background-color: red;
}
.done .close {
  background-color: rgb(143, 97, 11);
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;

}
</style>
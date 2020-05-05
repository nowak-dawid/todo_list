<template>
  <div class="wrapper">
    <button @click="consoleLogEvent()">Elo</button>
    <h1>TODO List<button @click="handleClick">Create new</button></h1>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item[0]">
          <input type="text" v-model="item['value']"/>
          <button>+</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [],
      iterator: 1
    };
  },
  methods: {
    handleClick() {
      this.list.push({ id: this.iterator++, value: "" });
    },
    consoleLogEvent() {
      console.log(this.list);
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
}
  li {
  list-style-type: none ;
  }
  input[type="text"]
  {
    border: none;
    border-bottom: 1px solid;
  }
</style>

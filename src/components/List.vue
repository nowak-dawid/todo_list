<template>
  <div class="wrapper">
  <!--   <h1>Todo list</h1>
    <button @click="addNew">Add new</button>
    <ul>
      <li v-for="(element, index) in list" :key="index">
        <input
          v-model="element.value"
          placeholder="type something"
          @blur="checkEmptyElement(index)"
        />
        <button @click="removeElement(index)">-</button>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { Vue, Component, Model, Prop } from "vue-property-decorator";
import List from "../Models/List";

@Component
export default class ListComponent extends Vue {
  @Prop() age!: number
  @Model("input", { type: List }) readonly syncedList!: List;
  
/*   addNew() {
    this.list.push({
      value: null
    });
  }
  checkEmptyElement(id) {
    if (this.list[id]["value"] === null) {
      this.list.splice(id, 1);
    }
  }
  removeElement(id) {
    this.list.splice(id, 1);
  } */
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper li {
  list-style-type: none;
}
.wrapper li input {
  border: none;
  border-bottom: solid 1px;
}
</style>

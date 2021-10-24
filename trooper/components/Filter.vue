<template lang="">
  <div id="demo">
    <ul>
      <h4>Gender</h4>
      <li v-for="gCat in genderCategories">
        <!-- @click="check($event)" -->
        <input
          type="checkbox"
          :value="gCat.merchantId"
          :id="gCat.merchantId"
          v-model="checkedGenderCategories"
        />
        {{ gCat.merchantId }}
      </li>
    </ul>
    {{ checkedGenderCategories }}

    <ul>
      <h4>PRICE</h4>
      <li v-for="pCat in priceCategories">
        <input
          type="checkbox"
          :value="pCat.priceId"
          :id="pCat.priceId"
          v-model="checkedPriceCategories"
        />
        {{ pCat.priceId }}
      </li>
    </ul>
    {{ checkedPriceCategories }}
    <button @click="filter">Filter</button>
  </div>
</template>
<script>

export default {
  emits: ["filterItems"],
  setup(props, context) {

    

    function filter() {
      context.emit("filterItems", this.checkedGenderCategories);
    }

    return {
    filter
    }
  },
  data() {
    return {
      checkedGenderCategories: [],
      genderCategories: [
        {
          merchantId: "mens",
        },
        {
          merchantId: "womens",
        },
      ],
      checkedPriceCategories: [],
      priceCategories: [
        {
          priceId: "Under $25",
        },
        {
          priceId: "$19 - $25",
        },
        {
          priceId: "$25 - $50",
        },
      ],
    };
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
}
li.done {
  text-decoration: line-through;
}

[v-cloak] {
  display: none;
}
</style>
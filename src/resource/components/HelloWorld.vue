<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="item in list" :key="item.id">
      <p>id: {{ item.id }}</p>
      <p>name: {{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  methods: {
    ...mapActions(['getDataAction'])
  },
  created () {
    this.getDataAction().then(rs => {
      console.log(rs)
      this.list = rs.data
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div>
    只是Home页面
    <el-button @click="textAxios">Demo
    </el-button>
  </div>

</template>

<script>
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  name: 'home',
  methods: {
    textAxios () {
      axios.get('http://localhost:8080/user').then((res) => {
        console.dir(res.data)
      }).catch((res) => {
        alert(res)
      })
    }
  }
}
</script>

<style>
</style>
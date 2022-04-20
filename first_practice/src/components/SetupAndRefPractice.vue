<template>
    <h2>setup 和 ref 的基本使用</h2>
    <h3>{{ count }}</h3>
    <button @click="updateCount">Update</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        // variables
        // define a responsive variable which reference to an object and init
        const count = ref(0)

        // method
        function updateCount() {
            console.log('update click!')
            count.value = count.value + 1
        }

        return {
            // parameters
            count,
            // method
            updateCount
        }
    },
})
</script>

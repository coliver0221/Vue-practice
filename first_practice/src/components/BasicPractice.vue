<template>
    <h2>setup 和 ref 的基本使用</h2>
    <h3>{{ count }}</h3>
    <button @click="updateCount">Update</button>
    <hr>
    <h2>reactive 的基本使用</h2>
    <h2>name: {{state.name}}</h2>
    <h2>age: {{state.age}}</h2>
    <h2>wife: {{state.wife}}</h2>
    <button @click="updateState">Update</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
    setup() {
        // variables
        // define a responsive variable which reference to an object and init
        const count = ref(0)
        // define a 'deep' responsive object, type = proxy
        const state = reactive({
            name: 'tom',
            age: 25,
            wife: {
                name: 'marry',
                age: 23,
            },
        })

        // method
        function updateCount() {
            console.log('update click!')
            count.value = count.value + 1
        }
        const updateState = () => {
            state.name += '!!'
            state.age += 2
            state.wife.name += '@@'
            state.wife.age -= 1
        }

        return {
            // parameters
            count,
            state,
            // method
            updateCount,
            updateState
        }
    },
})
</script>

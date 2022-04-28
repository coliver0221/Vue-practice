<template>
    <h2>Child Component</h2>
    <h3>msg from parent: {{ msg }}</h3>
    <button @click="update">Update msg in child</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'ChildComponent',
    props: ['msg', 'updateMsg'],
    setup(props, context) {
        console.log(props)
        console.log(context)
        // define function to update msg
        const update = () => {
            context.emit('updateMsg', ' Update by child!')
        }
        return {
            update
        }
    }
})
</script>
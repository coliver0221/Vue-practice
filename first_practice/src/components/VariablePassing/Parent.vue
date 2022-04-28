<template>
    <h1>Parent Component</h1>
    <h3>msg:{{ msg }}</h3>
    <button @click="msg+=' Update by Parent!'">Update msg in parent</button>
    <hr>
    <!-- passing msg into Child -->
    <Child :msg="msg" @updateMsg="updateMsg" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// import Child
import Child from './Child.vue'
export default defineComponent({
    name:'ParentComponent',
    components: {
        Child,
    },
    setup() {
        // define a variable and pass into child
        const msg = ref('This msg is defined in parent component.')
        // define a function for child to update msg
        const updateMsg = (txt: string) => {
            msg.value += txt
        }

        return {
            msg,
            updateMsg,
        }
    },
})
</script>
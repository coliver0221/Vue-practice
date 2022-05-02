<template>
    <h2>Computed 的基本使用</h2>
    fistName: <input v-model="user.firstName"/><br>
    lastName: <input v-model="user.lastName"/><br>
    fullName1: <input v-model="fullName1"/><br>
    fullName2: <input v-model="fullName2"/><br>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
    name:'App',
    setup() {
        const user = reactive({
            firstName: 'Andy',
            lastName: 'Su'
        })

        // computed with only getter
        const fullName1 = computed(() => {
            return user.firstName + '-' + user.lastName
        })

        // computed with getter and setter
        const fullName2 = computed({
            get() {
                return user.firstName + '-' + user.lastName
            },
            set(val: string) {
                const names = val.split('-')
                user.firstName = names[0]
                user.lastName = names[1]
            }
        })

        return {
            user,
            fullName1,
            fullName2
        }
    },
})
</script>
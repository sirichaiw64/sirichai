<template>
    <div>
        <h2>Get all users</h2>
        <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
        <div v-for="user in users" v-bind:key="user.id">
            <p>id: {{ user.id }}</p>
            <p>ชืEอ-นามสกุล: {{ user.name }} - {{ user.lastname }}</p>
            <p>email: {{ user.email }}</p>
            <p>password: {{ user.password }}</p>
            <p><button>ดูข้อมูลผู้ใช้</button></p>
        </div>
    </div>
</template>
<script>
import UsersService from '@/Services/usersservices'
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = (await UsersService.index()).data
    },
    methods: {
        navigateto(route) {
            this.$router.push(route)
        }
    }
}
</script>
<style scoped></style>
<template>
    <div>
        <h1>Edit User</h1>
        <form v-on:submit.prevent="editUser">
            <p>name: <input type="text" v-model="user.name"></p>
            <p>lastname: <input type="text" v-model="user.lastname"></p>
            <p>email: <input type="text" v-model="user.email"></p>
            <p>password: <input type="text" v-model="user.password"></p>
            <p><button type="submit">edit user</button></p>
            <p><button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล
                </button>
            </p>
            <button v-on:click="deleteUser(user)">ลบข้อมูล</button>

            <h4>จํานวนผู้ใช้งาน {{ users.length }}</h4>
            <p><button v-on:click="navigateTo('/user/create')">สร้างผู้ใช้งาน</button></p>

            <div v-for="user in users" v-bind:key="user.id"></div>
        </form>
        <hr>
        <div>
            <p>name: {{ user.name }}</p>
            <p>lastname: {{ user.lastname }}</p>
            <p>email: {{ user.email }}</p>
            <p>password: {{ user.password }}</p>
            <p></p>
        </div>
    </div>
</template>
<script>
import UsersService from '@/services/usersservices'
export default {
    data() {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(user) {
            try {
                await UsersService.delete(user)
                this.refreshData()
            } catch (err) {
                console.log(err)
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        }

    }

    ,
    async created() {
        try {
            let userId = this.$route.params.userId
            this.user = (await UsersService.show(userId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>
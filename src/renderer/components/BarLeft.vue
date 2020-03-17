<template>
    <div>
        <router-link to='/' class="router-btn">
            <img class="router-icon" src="@/assets/home-icon.svg">
        </router-link>
        <router-link to="/send-message" class="router-btn">
            <img class="router-icon" src="@/assets/send-icon.svg">
        </router-link>
        <router-link to="/message-box" class="router-btn">
            <img class="router-icon" src="@/assets/mail-icon.svg">
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.router-btn img {
    margin: 10px 5px;
}

.router-btn img:hover {
    transform: translate(4px);
}
</style>

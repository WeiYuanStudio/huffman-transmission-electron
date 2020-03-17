<template>
    <div class="message-item" v-on:click="$emit('update:showMessageHash', message.hash)">
        <div>{{message.hash}}</div>
        <div>{{message.date.substr(0,19).replace('T', ' ')}}</div>
    </div>
</template>

<script>
export default {
    props:['message', 'showMessageHash']
}
</script>

<style scoped>
.message-item {
    padding: 5px 10px;
    border: solid 1px black;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.3);
}

.message-item:active {
    transform: scale(0.95);
}

</style>

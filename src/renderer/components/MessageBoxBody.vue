<template>
    <div class="message-info-body">
        <div class="message-info-dict">
            <div v-for="(char, index) in dict" v-bind:key="index">
                <div class="dict-set">{{ char.character == ' ' ? '_' : char.character }} -> {{ char.huffmanCode }}</div>
            </div>
        </div>
        <div class="message-info-code">
            {{ code }}
        </div>
        <div class="message-info-message">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['showMessageHash'],
    data() {
        return {
            dict: null,
            code: '',
            message: ''
        }
    },
    methods: {
        updateDict() {
            /* Request huffman dict */
            this.$http
                .get('http://localhost:8080/huffman_api/dict/' + this.showMessageHash)
                .then(response => {
                    console.log(response);
                    this.dict = response.data.codeList;
                })
                .catch(error => {
                    console.log('Request dict failed');
                    console.log(error);
                })
        },
        updateCode() {
            /* Request huffman code */
            this.$http
                .get('http://localhost:8080/huffman_api/code/' + this.showMessageHash)
                .then(response => {
                    console.log(response);
                    /* 四个一组 */
                    let respCode = response.data;
                    let fomatCode = '';
                    let count = 0;
                    respCode.toString().split('').forEach(char => {
                        if (count == 4) {
                            fomatCode += ' ';
                            count = 0;
                        }
                        fomatCode += char;
                        ++count;
                    });
                    this.code = fomatCode;
                })
                .catch(error => {
                    console.log('Request code failed');
                    console.log(error);
                })
        },
        updateMessage() {
            /* Request huffman dict */
            this.$http
                .get('http://localhost:8080/huffman_api/message/' + this.showMessageHash)
                .then(response => {
                    console.log(response);
                    this.message = response.data;
                })
                .catch(error => {
                    console.log('Request message failed');
                    console.log(error);
                })
        }
    },
    created() {
        this.updateDict();
        this.updateCode();
        this.updateMessage();
    },
    watch: {
        showMessageHash: function() {
            this.updateDict();
            this.updateCode();
            this.updateMessage();
        }
    }
}
</script>

<style scoped>
.dict-set {
    text-align: center;
    font-size: 1.2em;
    margin: 5px auto;
}

.message-info-body {
    display: flex;
    flex-flow: row;
    height: 90vh;
}

.message-info-dict {
    width: 20%;
    border: solid 1px black;
    border-left: none;
    overflow: auto;
}

/* 隐藏字典滚动条 */
.message-info-dict::-webkit-scrollbar {
    width: 0 !important;
}

.message-info-code {
    width: 20%;
    border: solid 1px black;
    border-left: none;
    overflow-wrap: break-word;
}

.message-info-message {
    width: 60%;
    border: solid 1px black;
    border-left: none;
    border-right: none;
}
</style>

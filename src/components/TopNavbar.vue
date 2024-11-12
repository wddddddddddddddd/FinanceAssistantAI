<template>
    <div class="layout-header">
        <div class="avatar">
            <img class="generalrobot-icon" alt="" src="/logo_blue.png">
            <b class="b">财讯小灵通</b>
            <div class="input-container">
                <input type="text" class="input-field" placeholder="Please enter something" />
                <!-- Upload Button -->
                <button class="button" title="Upload file">
                    <img src="/icons/image.svg" alt="Upload">
                </button>
                <!-- Search Button -->
                <button class="button" title="Search">
                    <img src="/icons/search.svg" alt="Search">
                </button>
            </div>
            <a-space size="large">
                <a-avatar class="user-avatar">
                    <img alt="avatar" src="/Avatar.png" />
                </a-avatar>
            </a-space>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TopNavbar',
    methods: {
        onSearch(value) {
            console.log(value);
        },
        onUpload() {
            // 上传文件的处理逻辑
            console.log("Upload button clicked");
        }
    },
}
</script>


<style>
@font-face {
    font-family: 'ShouhuFont';
    src: url('/360shouhuType-Bold.otf') format('opentype');
}

.layout-header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    color: var(--color-white);
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
    height: 98px;
    background-image: linear-gradient(to right, #00e2f2, #00d7f4, #00cbf4, #00bff3, #00b3ef, #00afed, #00abeb, #00a7e9, #00abea, #00aeea, #00b2eb, #00b5eb);

}

.generalrobot-icon {
    width: 35px;
    height: 35px;
    border-radius: 10cm;
    margin-right: 10px;
}

.avatar {
    border-radius: 2.25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.b {
    font-size: 30px;
    line-height: 13.5px;
    font-family: 'ShouhuFont', monospace !important;
    color: #fff;
}

.input-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    width: 400px;
    margin-left: 40px;
}

.input-field {
    flex: 1;
    border: none;
    outline: none;
    padding: 8px;
}

.button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.button img {
    width: 20px;
    height: 20px;
    filter: brightness(0) saturate(100%);
    /* Makes SVG icons black */
}

.user-avatar {
    position: fixed !important;
    right: 20px;
}
</style>
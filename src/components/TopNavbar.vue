<template>
    <div class="layout-header">
        <div class="avatar">
            <img class="generalrobot-icon" alt="" src="../assets/icons/360.svg">
            <b class="b">财讯小灵通</b>
        </div>

    </div>
</template>

<script>
export default {
    name: 'TopNavbar'
}
</script>


<style>
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
    width: 48px;
    height: 38px;
}

.avatar {
    border-radius: 2.25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.b {
    font-size: 27px;
    line-height: 13.5px;
    font-family: '360shouhu Type';
    color: #fff;
}
</style>
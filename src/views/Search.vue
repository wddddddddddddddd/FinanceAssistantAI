<template>
    <div class="layout">
        <div class="container">
            <div class="title">财讯小灵通</div>
            <div class="searchBox">
                <div style="width: 100%; flex: 1;">
                    <a-textarea placeholder="请上传图片、文件或者输入想要了解的问题" :auto-size="{
                        minRows: 2,
                        maxRows: 5
                    }" class="textareaClass" />
                </div>

                <div class="addafterParent">
                    <div class="addafter">
                        <icon-file-image :style="{ fontSize: '22px' }" />
                    </div>
                    <div class="addafter">
                        <icon-folder-add :style="{ fontSize: '22px' }" @click="handleClick" />
                        <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
                            <template #title>
                                上传文件
                            </template>
                            <div>
                                <a-upload draggable action="/" />
                            </div>
                        </a-modal>
                    </div>
                    <div class="addafter">
                        <icon-send :style="{ fontSize: '22px' }" @click="this.$router.push('FinancialDashBoard')" />
                    </div>
                </div>
            </div>
            <div class="messageList">
                <div class="listItems" v-for="(item, index) in messageList" :key="index">{{ item }}</div>
                <div class="tag9">
                    <icon-plus-circle :style="{ fontSize: '14px', paddingRight: '2px' }" />
                    <div class="tag-text">查看更多</div>
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="menu-item" v-for="(item, index) in menuList" :key="index">
                <img :src="`/icons/${item.icon}.svg`" alt="" style="height: 40px;width: 40px;" :title="item.name"
                    @click="gotoPage(item.path)">
            </div>
        </div>
    </div>


</template>


<script>
import IconWrapper from '../components/IconPicture.vue'
import { IconFileImage, IconFolderAdd, IconPlusCircle, IconSend } from '@arco-design/web-vue/es/icon';

export default {
    name: 'Search',
    components: {
        IconWrapper,
        IconFileImage,
        IconFolderAdd,
        IconPlusCircle,
        IconSend
    },
    data() {
        return {
            messageList: [
                '2024年新能源汽车财报', '2024年腾讯财报', '2024年中国银行业展望报告', '全球经济环境及政策和商业行动的见解',
                '2024年国际财务报告会计准则变化', '国际财务报告准则第18号', '2024年ESG报告的实施', '新国际财务报告会计准则IFRS 18',
                '新国际财务报告会计准则IFRS 18'
            ],
            visible: false,
            menuList: [
                {
                    name: '首页',
                    icon: '下雪',
                    path: 'index'
                },
                {
                    name: '搜索',
                    icon: '星星',
                    path: "search"
                },
                {
                    name: '首页',
                    icon: '下雪',
                    path: 'index'
                }, {
                    name: '首页',
                    icon: '下雪',
                    path: 'index'
                }, {
                    name: '首页',
                    icon: '下雪',
                    path: 'index'
                },
            ]
        }
    },
    methods: {
        handleClick() {
            this.visible = true;
        },
        handleOk() {
            this.visible = false;
        },
        handleCancel() {
            this.visible = false;
        },
        gotoPage(path) {
            console.log(path);
            this.$router.push(path)
        }
    },
};
</script>

<style>
.layout {
    height: 100%;
    width: 100%;
}

.container {
    padding-top: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.title {
    margin-bottom: 24px;
    font-family: '360shouhu Type';
    font-size: 64px;
    font-weight: 700;
    height: 64px;
    line-height: 64px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #4080FF
}



.searchBox {
    width: 770px;
    height: 130px;
    position: relative;
    border-radius: 8px;
    background-color: #e8f3ff;
    border: 1px dashed #94bfff;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 8px 16px;
    gap: 4px;
    text-align: left;
    font-size: 14px;
    color: #86909c;
    font-family: 'PingFang SC';

}

.addafterParent {
    /* position: absolute; */
    display: flex;
}


.addafter {
    width: 22px;
    position: relative;
    height: 22px;
}

.addafter:first-child {
    margin-right: 8px;
}

.addafter:last-child {
    margin-left: 8px;
}

.textareaClass {
    height: 100%;
    width: 100%;
    background-color: transparent !important;
}

.arco-textarea-wrapper,
.arco-textarea-wrapper:focus-within,
.arco-textarea-wrapper:hover,
.arco-textarea-wrapper:focus-visible {
    border: none !important;
    outline: none !important;
}

.messageList {
    margin-top: 24px;
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.listItems,
.tag9 {
    border-radius: 4px;
    margin: 2px;
    border: 1px solid #3491fa;
    box-sizing: border-box;
    overflow: hidden;
    align-items: center;
    padding: 5px 8px;
    text-align: left;
    font-size: 14px;
    color: #3491fa;
    font-family: 'PingFang SC';
}

.tag9 {
    display: flex;
    border-radius: 4px;
    background-color: #e8f3ff;
    border: 1px solid #165dff;
    box-sizing: border-box;
    padding: 5px 8px;
    gap: 4px;
    font-size: 14px;
    color: #165dff;
    font-family: 'PingFang SC';
}

.slider {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
}
</style>
<template>
    <div class="layout-demo">
        <a-layout style="height: 900px;">
            <TopNavbar />
            <a-layout>
                <a-layout-content>
                    <div class="content-headers">
                        <div class="menu-demo" style="width: 100%; display: flex;">
                            <a-menu mode="horizontal" :default-selected-keys="['1']" style="display: flex;">
                                <a-menu-item v-for="(route, index) in routes" :key="index" :to="route.path">
                                    {{ route.label }}
                                </a-menu-item>
                            </a-menu>
                        </div>
                    </div>
                </a-layout-content>
                <a-layout-sider>Sider</a-layout-sider>
            </a-layout>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </div>
</template>


<script>
import TopNavbar from '../components/TopNavbar.vue';
export default {
    name: 'FinancialDashBoard',
    components: {
        TopNavbar
    },
    data() {
        return {
            routes: [
                {
                    path: '/FinancialDashBoard',
                    label: '全部'
                },
                {
                    path: '/',
                    label: '信息科技'
                },
                {
                    path: '/channel',
                    label: '大消费',
                },
                {
                    path: '/news',
                    label: '生命健康'
                },
                {
                    path: '/news',
                    label: '传媒娱乐'
                },
                {
                    path: '/news',
                    label: '先进制造'
                },
                {
                    path: '/news',
                    label: '地产金融'
                },
                {
                    path: '/news',
                    label: '传统行业'
                },
                {
                    path: '/news',
                    label: '电子科技'
                },
                {
                    path: '/news',
                    label: '机械制造'
                },
                {
                    path: '/news',
                    label: '汽车制造'
                },
                {
                    path: '/news',
                    label: '传统能源'
                },
                {
                    path: '/news',
                    label: '新能源'
                },
                {
                    path: '/news',
                    label: '航天航空'
                },
                {
                    path: '/news',
                    label: '高端消费'
                },
            ],
        }
    }
};
</script>


<style scoped>
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: var(--color-white);
    font-size: 16px;
    font-stretch: condensed;
    text-align: center;
}

.layout-demo :deep(.arco-layout-footer) {
    height: 64px;
    background-color: var(--color-primary-light-4);
    flex: 1;
}

.layout-demo :deep(.arco-layout-sider) {
    width: 206px;
    background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-content) {
    height: 800px;
}

.content-headers {
    display: flex;
    width: 100%;
    position: relative;
    border-bottom: 1px solid #e5e6eb;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    text-align: left;
    font-size: 16px;
    color: #4e5969;
    font-family: 'PingFang SC';
}

.menu-demo {
    width: 100%;
    display: flex;
}

.arco-layout-content:deep(.arco-menu-overflow-wrap) {
    display: flex !important;
}
</style>

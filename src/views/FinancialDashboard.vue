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
                    <div class="card-container">
                        <!-- 使用 v-for 循环渲染所有卡片，并设置逐个显示的延迟 -->
                        <StatisticCard v-for="(card, index) in cards" :key="index" :title="card.title"
                            :imgSrc="card.img_src" :tagList="card.tag_list"
                            :style="{ animationDelay: `${index * 0.2}s` }" />
                    </div>
                </a-layout-content>
                <a-layout-sider>Sider</a-layout-sider>
            </a-layout>
            <a-layout-footer>
                <FooterCopyRight />
            </a-layout-footer>
        </a-layout>
    </div>
</template>


<script>
import TopNavbar from '../components/TopNavbar.vue';
import StatisticCard from '@/components/StatisticCard.vue';
import FooterCopyRight from '@/components/FooterCopyRight.vue';

export default {
    name: 'FinancialDashBoard',
    components: {
        TopNavbar,
        StatisticCard,
        FooterCopyRight
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
            cards: [
                { title: '2019-2024H1全球PC出货量', img_src: 'https://data.hanghangcha.com/SUBPNG/78/78468af1f16dd430d0488db42b467906.png', tag_list: ['家电', '信息家电'] },
                { title: '全国数据中心机架规模', img_src: 'https://data.hanghangcha.com/SUBPNG/29/297f5189f72c21f7b9d2e9afc425a4bf.png', tag_list: ['大数据', '数据中心'] },
                { title: '2019-2023年智能穿戴设备出货量', img_src: 'https://data.hanghangcha.com/SUBPNG/2b/2bd74cfce9f64014d04571343ce8a817.png', tag_list: ['智能硬件'] },
                { title: '2019-2024H1智能手机出货量', img_src: 'https://data.hanghangcha.com/SUBPNG/b2/b28f3fbf551f5c2b546f972f3adc476a.png', tag_list: ['手机'] },
                { title: '数据中心PUE指标要求', img_src: 'https://data.hanghangcha.com/SUBPNG/e1/e1389e80797a225ae751a1b36c2ae284.png', tag_list: ['大数据', '数据中心'] },
                { title: '热管结构示意图', img_src: 'https://data.hanghangcha.com/SUBPNG/19/1981c3d0be8b12c7eafa3f737aba978e.png', tag_list: ['电子元件'] },
                { title: '2019-2024H1全球PC出货量', img_src: 'https://data.hanghangcha.com/SUBPNG/78/78468af1f16dd430d0488db42b467906.png', tag_list: ['家电', '信息家电'] },
                { title: '全国数据中心机架规模', img_src: 'https://data.hanghangcha.com/SUBPNG/29/297f5189f72c21f7b9d2e9afc425a4bf.png', tag_list: ['大数据', '数据中心'] },
                { title: '2019-2023年智能穿戴设备出货量', img_src: 'https://data.hanghangcha.com/SUBPNG/2b/2bd74cfce9f64014d04571343ce8a817.png', tag_list: ['智能硬件'] },
                { title: '2019-2024H1智能手机出货量', img_src: 'https://data.hanghangcha.com/SUBPNG/b2/b28f3fbf551f5c2b546f972f3adc476a.png', tag_list: ['手机'] },
                { title: '数据中心PUE指标要求', img_src: 'https://data.hanghangcha.com/SUBPNG/e1/e1389e80797a225ae751a1b36c2ae284.png', tag_list: ['大数据', '数据中心'] },
                { title: '热管结构示意图', img_src: 'https://data.hanghangcha.com/SUBPNG/19/1981c3d0be8b12c7eafa3f737aba978e.png', tag_list: ['电子元件'] },
            ]
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
    flex: 1;
}

.layout-demo :deep(.arco-layout-sider) {
    width: 190px;
    background-color: var(--color-primary-light-3);
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

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
}

.statistic-card {
    opacity: 0;
    animation: fadeIn 0.7s ease-in-out forwards;
    border: #4e5969;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(40px);
        /* 起始位置稍微偏移 */
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        /* 结束时回到原位 */
    }
}
</style>

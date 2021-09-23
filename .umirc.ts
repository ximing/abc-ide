import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/mobile', component: '@/pages/mobile' },
  ],
  fastRefresh: {},
  exportStatic: { htmlSuffix: true },
});

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/index' },
    { path: '/mobile', component: '@/mobile' },
  ],
  fastRefresh: {},
  exportStatic: { htmlSuffix: true },
});

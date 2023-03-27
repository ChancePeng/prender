import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'prender',
    logo: '/logo.png',
    footer: 'power by change',
  },
  theme: {
    '@theme-color': '#1997CC',
  },
  styles: ['body{font-size:14px}'],
  links: [{ href: '/logo.png', rel: 'shortcut icon' }],
});

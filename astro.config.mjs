import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://neilraman.com',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Lora Variable',
      cssVariable: '--font-lora',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Lora-Variable.woff2'],
            weight: '400 700',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Lora-Italic-Variable.woff2'],
            weight: '400 700',
            style: 'italic',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter Variable',
      cssVariable: '--font-inter',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/InterVariable.woff2'],
            weight: '400 600',
            style: 'normal',
          },
        ],
      },
    },
  ],
});

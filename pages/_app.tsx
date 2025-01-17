import '../fonts/GreycliffCF/styles.css';
import '@mantine/core/styles.css';
import '@mantinex/shiki/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantinex/mantine-header/styles.css';
import '@mantinex/mantine-logo/styles.css';
import Head from 'next/head';
import { MantineProvider, DirectionProvider, localStorageColorSchemeManager } from '@mantine/core';
import { ShikiProvider } from '@mantinex/shiki';
import { HotKeysHandler } from '@/components/HotKeysHandler';
import { Search } from '@/components/Search';
import { GaScript } from '@/components/GaScript';

async function loadShiki() {
  const { getHighlighter } = await import('shikiji');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
  });

  return shiki;
}

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Mantine UI</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mantinedev" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png"
        />
      </Head>
      <GaScript />

      <DirectionProvider initialDirection="ltr" detectDirection={false}>
        <MantineProvider
          defaultColorScheme="auto"
          colorSchemeManager={localStorageColorSchemeManager({ key: 'mantine-ui-color-scheme' })}
        >
          <ShikiProvider loadShiki={loadShiki}>
            <HotKeysHandler />
            <Component {...pageProps} />
            <Search data={pageProps.allComponents} />
          </ShikiProvider>
        </MantineProvider>
      </DirectionProvider>
    </>
  );
}

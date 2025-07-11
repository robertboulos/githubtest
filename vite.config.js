import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"playgound":{"outputDir":"./playgound","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/playgound/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/playgound/"}]},"login":{"outputDir":"./login","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/login/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/login/"}]},"settings":{"outputDir":"./settings","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/settings/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/settings/"}]},"concierge":{"outputDir":"./concierge","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/concierge/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/concierge/"}]},"index":{"outputDir":"./","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/"}]},"dashboard":{"outputDir":"./dashboard","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/dashboard/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/dashboard/"}]},"sign-up":{"outputDir":"./sign-up","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/sign-up/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/sign-up/"}]},"folio":{"outputDir":"./folio","lang":"en","title":"","cacheVersion":2,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/folio/"},{"rel":"alternate","hreflang":"en","href":"https://08245231-60e4-4ae3-93a7-fa98741cc0c7.weweb-preview.io/folio/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});

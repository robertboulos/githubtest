import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"08245231-60e4-4ae3-93a7-fa98741cc0c7","homePageId":"bb395e2f-f2e9-4050-81ea-6d753eee5be3","authPluginId":"f5856798-485d-47be-b433-d43d771c64e1","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"4bc0364c-c130-44b1-82e8-449df98d5ce5","linkId":"4bc0364c-c130-44b1-82e8-449df98d5ce5","name":"Playgound","folder":null,"paths":{"en":"playgound","default":"playgound"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"976d1778-8f17-45f5-a137-3753b946ade4","sectionTitle":"","linkId":"3e1d527b-9236-480a-9b33-df966e14b0e7"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6767f37b-c3ae-4fa9-8874-64fab2690e3d","linkId":"6767f37b-c3ae-4fa9-8874-64fab2690e3d","name":"Login","folder":null,"paths":{"en":"login","default":"login"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f737aa61-2452-47bf-afa8-97a761acf7a2","sectionTitle":"Login Container","linkId":"78d5ee9d-7b42-4c34-82a9-fe76a7a546ae"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"66310430-f55f-4897-b143-54e475a6b72b","linkId":"66310430-f55f-4897-b143-54e475a6b72b","name":"Settings","folder":null,"paths":{"en":"settings","default":"settings"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5c307ed0-c8da-4f1f-946b-6a521b1eda71","sectionTitle":"Dashboard Layout","linkId":"4fc75234-5b85-46f7-b1aa-7582409cd174"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cbdb5df5-5c1b-47d6-be31-d5580a04489f","linkId":"cbdb5df5-5c1b-47d6-be31-d5580a04489f","name":"Concierge","folder":null,"paths":{"en":"concierge","default":"concierge"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"75ceace0-4bef-4000-9778-93949563606e","sectionTitle":"Dashboard Layout","linkId":"7b3c3978-0248-44ce-a8fb-b5aea9a94492"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bb395e2f-f2e9-4050-81ea-6d753eee5be3","linkId":"bb395e2f-f2e9-4050-81ea-6d753eee5be3","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"33e3d087-2db0-4536-8eee-240417840b55","sectionTitle":"Navigation Bar","linkId":"1247ecff-7b2e-4ca3-880b-a0b851354e3d"},{"uid":"b8832389-c721-4848-b4a2-fd63f05fa88f","sectionTitle":"Hero Section","linkId":"2e3328b3-3cd8-4c25-8065-9138e5505498"},{"uid":"59ec22e9-8907-4159-bc0e-4b45b86df206","sectionTitle":"Features Section","linkId":"3970b8cc-ecd3-4864-9338-13b3485f82ef"},{"uid":"9a1ca7de-aa3b-4b43-989f-853721e39c8c","sectionTitle":"Testimonials Section","linkId":"0aebc238-c481-4fa7-8cb8-a47dba1ec0d1"},{"uid":"6c42c52a-9148-4c2e-aaa8-e8a8a7ea09e8","sectionTitle":"Pricing Section","linkId":"950acd7f-8299-462a-a541-15e7cbb654f8"},{"uid":"e61aaedc-9f34-4d37-8724-24fba6c82953","sectionTitle":"Final CTA Section","linkId":"91afde20-8ed6-4501-97f3-27fc88685a8c"},{"uid":"1791da5d-cc13-425b-bb90-da3ddd95ec86","sectionTitle":"Footer Section","linkId":"b348e179-478f-4278-bfb9-48e01e971f19"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"152d06e4-437a-4159-b67a-2c47eab47dca","linkId":"152d06e4-437a-4159-b67a-2c47eab47dca","name":"Dashboard","folder":null,"paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2ee864e1-a856-403c-9535-ebf614bbff18","sectionTitle":"Dashboard Layout","linkId":"bba88bbc-3a2d-4e29-985f-3d262d90200c"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d76443aa-09de-49b0-a6d2-d5e3476e93fe","linkId":"d76443aa-09de-49b0-a6d2-d5e3476e93fe","name":"Sign Up","folder":null,"paths":{"en":"sign-up","default":"sign-up"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"eb2cc7c4-00dc-464d-96bb-b1873409a5aa","sectionTitle":"Signup Container","linkId":"c367f3c9-4b7e-4007-bddd-998df8b3430e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d7819407-5238-48f1-96ef-2d82e21d8c58","linkId":"d7819407-5238-48f1-96ef-2d82e21d8c58","name":"Folio","folder":null,"paths":{"en":"folio","default":"folio"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"a5e23952-3b09-4a5e-859d-6b05bbf909b4","sectionTitle":"Active Folio Page","linkId":"f27a509e-664b-4031-b2fd-1fd419294532"},{"uid":"45e1d0c1-6d62-4172-a4cc-3f7f40f76970","sectionTitle":"Section","linkId":"3189265f-6cda-4006-99ab-66327319f1a9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"f5856798-485d-47be-b433-d43d771c64e1","name":"Xano Auth","namespace":"xanoAuth"},{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 2;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;

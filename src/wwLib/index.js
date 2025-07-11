import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_6cbfb394_eb87_4d17_8df6_37ebc95e66d0 from '@/components/plugins/plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0/src/wwPlugin.js';
import plugin_f5856798_485d_47be_b433_d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0', plugin_6cbfb394_eb87_4d17_8df6_37ebc95e66d0);
wwLib.wwPluginHelper.registerPlugin('plugin-f5856798-485d-47be-b433-d43d771c64e1', plugin_f5856798_485d_47be_b433_d43d771c64e1);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7', plugin_cd33cf33_e29f_4e8c_ac26_b997fe507ce7);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"7a5b7253-21cc-47ee-ad77-0ec04ab269b8":"#000000","7632f686-59a8-458c-808a-6ea3b2b3cffd":"#A8A8A8","4d875374-8c3c-40cb-81fc-f76cea2497d7":"#FBF6EB","79638dde-5f9c-4bfe-ae32-6af34877fb18":"#7E7B76","80b8764c-791c-4b93-81b3-ae01b508f426":"#F1EDE2","3452ec87-18f7-41e9-b085-60c8075066e8":"#001426","165772b4-cd9a-4a1b-80f7-c92dc569de9b":"#FFFFFF","dd2d2eb8-4fef-4b67-870d-87d9002e0d4a":"#D5D2D2","08ce8e67-6e8b-4cd6-b557-34a3df9e8e53":"#000000","58e7c6c9-f9ee-49e6-b5a2-60a4330b1836":"#52525B","546ef8cf-48d7-409b-be11-090e430db5b6":"#DC4941","5ca47f48-9bce-4b06-bb91-ff9d612edd0a":"#FFFDAF","0b7f9226-a350-47a4-943a-6ab73c9a6383":"#A031A0E6","14190315-4b88-4cd0-9647-83071a52c2f3":"#000000A8","6cf66879-2665-432f-8352-dd978975c66a":"#8E1E1E","7d552052-de21-4ffd-80fa-019078628a99":"#3C7E44","d437167a-0010-4385-b59e-f09523443120":"#D7E7D9","b2513bf9-3f56-4297-9b2d-72cef6f3d928":"#02111E","303c2f2e-7134-43aa-aaf1-78894efc06f9":"#fae5e4","07db0ae0-5a5f-4fb3-8cd2-1bac1c11d95e":"#aa2e26","0a2a25ec-4e6c-4244-9d44-840b8011092f":"#D9EFFF","e29753a9-f252-4544-ba39-0061d208a7a6":"#2486CC","0e32d10b-0a7c-4c6c-ac56-e1de39729273":"#F1D713","bfb2469c-3193-479c-9af7-8965de277c41":"#FAF8DBE6","a72297d8-3c54-4b26-ac53-77b9f14f23a7":"#000000C7","f81dfd80-e847-4d92-a2e0-68280a645559":"#363636","37edfc77-2e70-4b61-a424-b1f7d4c31ce4":"#0557A8","0cb92a01-45f7-410b-9909-9e3b8907a602":"#00000000","11baf400-ae4c-4d46-bf05-e2d2823ae857":"#A95DA5","edcf46e2-7794-4fb2-b583-0457a019f729":"#E7C2E5","7abef177-64d7-4bc3-9e54-051f5aae7368":"#8B6F32","521196d1-bbc9-4ce8-81c3-e0852932607a":"#FBEBBC"} : {"7a5b7253-21cc-47ee-ad77-0ec04ab269b8":"#000000","7632f686-59a8-458c-808a-6ea3b2b3cffd":"#A8A8A8","4d875374-8c3c-40cb-81fc-f76cea2497d7":"#FBF6EB","79638dde-5f9c-4bfe-ae32-6af34877fb18":"#7E7B76","80b8764c-791c-4b93-81b3-ae01b508f426":"#F1EDE2","3452ec87-18f7-41e9-b085-60c8075066e8":"#001426","165772b4-cd9a-4a1b-80f7-c92dc569de9b":"#FFFFFF","dd2d2eb8-4fef-4b67-870d-87d9002e0d4a":"#D5D2D2","08ce8e67-6e8b-4cd6-b557-34a3df9e8e53":"#000000","58e7c6c9-f9ee-49e6-b5a2-60a4330b1836":"#52525B","546ef8cf-48d7-409b-be11-090e430db5b6":"#DC4941","5ca47f48-9bce-4b06-bb91-ff9d612edd0a":"#FFFDAF","0b7f9226-a350-47a4-943a-6ab73c9a6383":"#A031A0E6","14190315-4b88-4cd0-9647-83071a52c2f3":"#000000A8","6cf66879-2665-432f-8352-dd978975c66a":"#8E1E1E","7d552052-de21-4ffd-80fa-019078628a99":"#3C7E44","d437167a-0010-4385-b59e-f09523443120":"#D7E7D9","b2513bf9-3f56-4297-9b2d-72cef6f3d928":"#02111E","303c2f2e-7134-43aa-aaf1-78894efc06f9":"#fae5e4","07db0ae0-5a5f-4fb3-8cd2-1bac1c11d95e":"#aa2e26","0a2a25ec-4e6c-4244-9d44-840b8011092f":"#D9EFFF","e29753a9-f252-4544-ba39-0061d208a7a6":"#2486CC","0e32d10b-0a7c-4c6c-ac56-e1de39729273":"#F1D713","bfb2469c-3193-479c-9af7-8965de277c41":"#FAF8DBE6","a72297d8-3c54-4b26-ac53-77b9f14f23a7":"#000000C7","f81dfd80-e847-4d92-a2e0-68280a645559":"#363636","37edfc77-2e70-4b61-a424-b1f7d4c31ce4":"#0557A8","0cb92a01-45f7-410b-9909-9e3b8907a602":"#00000000","11baf400-ae4c-4d46-bf05-e2d2823ae857":"#A95DA5","edcf46e2-7794-4fb2-b583-0457a019f729":"#E7C2E5","7abef177-64d7-4bc3-9e54-051f5aae7368":"#8B6F32","521196d1-bbc9-4ce8-81c3-e0852932607a":"#FBEBBC"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"34c22a27-198f-462f-a062-111fb0ed5e18":"400 13px/normal 'Open Sans', sans-serif","3c2b3406-11ba-4d1b-9129-ddde4b0fb0ea":"400 14px/normal 'Open Sans', sans-serif","ec2f1490-a7f2-4783-84c4-b4e6ca7352aa":"400 22px/normal 'Palatino Bold', serif","9923fa9d-a463-4fab-b201-694918eb4407":"400 20px/normal 'Palatino Bold', serif","06089e62-f36a-4637-9514-4076013cbafc":"500 15px/normal 'Open Sans', sans-serif","917ee6c3-588d-4ec0-9f62-5d04611c77af":"600 14px/normal 'Open Sans', sans-serif","76fccf5d-162c-4a14-9ccb-3a86c2fe1f62":"400 13px/normal 'Open Sans', sans-serif","4389db81-a499-4fd9-aea7-0770895ee31c":"600 14px/normal 'Open Sans', sans-serif","2e1814b3-210f-487c-b35a-e3242d4141b8":"400 12px/normal 'Open Sans', sans-serif","ff9c8e6c-10a0-4e7e-ba3a-a7ba393ca339":"400 14px/normal 'Open Sans', sans-serif","a7479c69-8ed0-4339-9796-ff831a73fb6f":"500 26px/normal 'Palatino', serif","1bcd7dac-4189-48ae-a661-86f39ff454ef":"500 15px/normal 'Open Sans', sans-serif","f7524c25-bff1-442d-a7c7-bfdedc4292f2":"400 13px/normal 'Open Sans', sans-serif","4f068676-4ba9-4e0e-b445-36310df52510":"500 14px/normal 'Open Sans', sans-serif","390dc45f-535e-45ac-a793-a4e130fcc65d":"600 15px/normal 'Open Sans', sans-serif","f01e5747-fb15-429d-a28e-b6082d0f2222":"600 14px/normal 'Open Sans', sans-serif","1ccb844f-f073-47c9-b651-6962a402c795":"400 14px/normal 'Open Sans', sans-serif","7136d279-6eea-46ec-a7e1-721e96a2c517":"400 13px/normal 'Open Sans', sans-serif","89ec3337-77b2-46a8-ac3b-30062862f532":"400 14px/normal 'Open Sans', sans-serif","a366cd63-c6a4-45a2-b228-03b2bfb193c3":"500 14px/normal 'Open Sans', sans-serif","f6e79782-8a4d-479a-9ac7-a90eca1923c8":"400 12px/normal 'Open Sans', sans-serif","decbddfa-504b-444f-b641-8efa620a48b1":"400 19px/26px 'Palatino Bold', serif","db7f10ca-1da7-4277-94c4-fafd666b52e6":"500 13px/normal 'Open Sans', sans-serif","109eb3b1-00f5-4662-b722-608c88cffc43":"400 16px/normal 'Open Sans', sans-serif","6eddf86a-a4d8-4a46-ad3d-cbcaf48d5484":"400 17px/normal 'Open Sans', sans-serif","47db59db-fd4a-45e3-92e6-9b5594780656":"400 15px/normal 'Open Sans', sans-serif","40780b66-f1bd-472b-b166-3201f7314a5d":"400 17px/1.4em 'Palatino', serif","0d903852-9ef9-472a-b4b4-963e22b9484d":"500 16px/normal 'Open Sans', sans-serif","569b4637-3c85-405e-a6ce-c3062b708cab":"500 16px/20px 'Open Sans', sans-serif","0330fb19-bf1b-4e53-a106-8423768bfd91":"400 17px/normal 'Palatino', serif","28da54c8-6339-4f4e-ad26-1828ea5a1e43":"500 17px/normal 'Open Sans', sans-serif","b56097f9-323c-4b42-ad45-71cc6ba3057c":"400 16px/normal 'Open Sans', sans-serif","9c371334-1b8d-42fd-b55d-eff1f63ac2ac":"500 18px/normal 'Open Sans', sans-serif","5c860a35-28de-413a-a022-21cf9b198cc0":"400 32px/normal 'Palatino', serif","47f8763c-5e0c-4547-8db1-3acd3246e550":"500 15px/normal 'Open Sans', sans-serif","cbcc843a-135f-42f9-a23f-c502f9eaacd9":"400 16px/24px 'Open Sans', sans-serif","fe529f36-31a8-4fb6-854b-cb8ef7b785d9":"500 19px/normal 'Open Sans', sans-serif","1f33c82d-3596-42e2-8401-4ef52a324483":"400 17px/normal 'Open Sans', sans-serif","85ec39f1-4a40-4324-85d3-98cef998c68f":"500 18px/normal 'Open Sans', sans-serif","b3d86f93-a4f3-4c1c-bb52-ec5ee922c46b":"500 20px/normal 'Open Sans', sans-serif","cb1eba1e-c237-4745-955d-7b274f2470ea":"400 15px/21px 'Open Sans', sans-serif","d6223dff-7d6c-4349-9982-e3ef535fd9da":"400 14px/26px 'Open Sans', sans-serif","4ab279d9-098e-435f-afb6-c49d66d6e887":"400 14px/normal 'Open Sans', sans-serif","69635f0b-ada1-4912-ab04-bd01f2d42bd4":"500 17px/normal 'Open Sans', sans-serif","a6281dc4-a39b-4763-ac21-db439597e807":"500 22px/normal 'Open Sans', sans-serif"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}

import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
/* wwFront:start */
import plugin6cbfb394eb874d178df637ebc95e66d0 from '@/components/plugins/plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0/ww-config.js';
import pluginf5856798485d47beb433d43d771c64e1 from '@/components/plugins/plugin-f5856798-485d-47be-b433-d43d771c64e1/ww-config.js';
import plugin832d6f7a42c343f1a3ce9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/ww-config.js';
import plugincd33cf33e29f4e8cac26b997fe507ce7 from '@/components/plugins/plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7/ww-config.js';
import section99586bd32b154d6ba0256a50d07ca845 from '@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js';
import wwobject58d13ef195714c1d86b696eff6d719ee from '@/components/elements/element-58d13ef1-9571-4c1d-86b6-96eff6d719ee/ww-config.js';
import wwobjectb0d8dcc130b2452eb6f1af5fad558a86 from '@/components/elements/element-b0d8dcc1-30b2-452e-b6f1-af5fad558a86/ww-config.js';
import wwobject12220806894d4667a96e598262b8d531 from '@/components/elements/element-12220806-894d-4667-a96e-598262b8d531/ww-config.js';
import wwobjectc98cf519178d46c6a0c3170bd1699feb from '@/components/elements/element-c98cf519-178d-46c6-a0c3-170bd1699feb/ww-config.js';
import wwobjectf55b24ed07b14d29947eabf7c37c8ba2 from '@/components/elements/element-f55b24ed-07b1-4d29-947e-abf7c37c8ba2/ww-config.js';
import wwobject6a0edc41ab8146a6a9ef7844ef5ea73e from '@/components/elements/element-6a0edc41-ab81-46a6-a9ef-7844ef5ea73e/ww-config.js';
import wwobject2d18ef4ce9e54dc6a29d01d9f797be5e from '@/components/elements/element-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e/ww-config.js';
import wwobject734633a1457d4fe59eaa773dddc755f1 from '@/components/elements/element-734633a1-457d-4fe5-9eaa-773dddc755f1/ww-config.js';
import wwobject21881619a984484781a9922c3dbb5853 from '@/components/elements/element-21881619-a984-4847-81a9-922c3dbb5853/ww-config.js';
import wwobjectaeb78b9a6fb64c49931dfaedcfad67ba from '@/components/elements/element-aeb78b9a-6fb6-4c49-931d-faedcfad67ba/ww-config.js';
import wwobjectfd8c482f532c4aeba7ae6904a6b62a1b from '@/components/elements/element-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b/ww-config.js';
import wwobject0d3e75d19e7744cba2728b0825fbc5da from '@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js';
import wwobject69d0b3efb265494c8cd1874da4aa1834 from '@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js';
import wwobject83d890fb84f94386b459fb4be89a8e15 from '@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js';
import wwobject6ba133b6a444414f93a525cd237dd398 from '@/components/elements/element-6ba133b6-a444-414f-93a5-25cd237dd398/ww-config.js';
import wwobjectaf811adf94d949ddab22e2f29ae30299 from '@/components/elements/element-af811adf-94d9-49dd-ab22-e2f29ae30299/ww-config.js';
import wwobject6f8796b18273498d95fc7013b7c63214 from '@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js';
import wwobject73a13effbdc74021bdc6413c97fe91c1 from '@/components/elements/element-73a13eff-bdc7-4021-bdc6-413c97fe91c1/ww-config.js';
import wwobject9256b033f4e84ab4adcedac3a940d7f5 from '@/components/elements/element-9256b033-f4e8-4ab4-adce-dac3a940d7f5/ww-config.js';
import wwobjectd7904e9dfc9a4d809e32728e097879ad from '@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js';
import wwobjectaa27b26f06864c2998c58217044045b7 from '@/components/elements/element-aa27b26f-0686-4c29-98c5-8217044045b7/ww-config.js';
import wwobject3a7d637912d3438798ffb332bb492a63 from '@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js';
import wwobjectb783dc65d5284f748c14e27c934c39b1 from '@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js';
import wwobject8aaf365113514aea8b385d10ebc7fb69 from '@/components/elements/element-8aaf3651-1351-4aea-8b38-5d10ebc7fb69/ww-config.js';
import wwobjectc8199d0db61f464098e0c4be9ea254e0 from '@/components/elements/element-c8199d0d-b61f-4640-98e0-c4be9ea254e0/ww-config.js';
import wwobject985570fcb3c04566800482ab3b30a11d from '@/components/elements/element-985570fc-b3c0-4566-8004-82ab3b30a11d/ww-config.js';
import wwobjectfaf7b16f26ea436887201563d265cd31 from '@/components/elements/element-faf7b16f-26ea-4368-8720-1563d265cd31/ww-config.js';
import wwobject5a88036f22ea4f8db4a5bc226ef95061 from '@/components/elements/element-5a88036f-22ea-4f8d-b4a5-bc226ef95061/ww-config.js';
import wwobject6d692ca26cdc4805aa0c211102f335d0 from '@/components/elements/element-6d692ca2-6cdc-4805-aa0c-211102f335d0/ww-config.js';
import wwobject1b1e21739b7842cca8eea6167caea340 from '@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js';
import wwobjectd2eeb897ad9549e48394fe3f5c9a81fb from '@/components/elements/element-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb/ww-config.js';
import wwobject59dca300db7842e4a7a60cbf22d3cc82 from '@/components/elements/element-59dca300-db78-42e4-a7a6-0cbf22d3cc82/ww-config.js';
import wwobject9ecb2cfccef74be8b7363e17a3b7e9ff from '@/components/elements/element-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff/ww-config.js';
import wwobjectdeb10a015eef4aa190171b51c2ad6fd0 from '@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js';
import wwobject9ae1fce82e314bfda4d20450235bdfd5 from '@/components/elements/element-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5/ww-config.js';
import wwobject6145eb600af84e52bcc6dc0f6743654e from '@/components/elements/element-6145eb60-0af8-4e52-bcc6-dc0f6743654e/ww-config.js';
import wwobjecte2962a2203b34421b85e906177d2303f from '@/components/elements/element-e2962a22-03b3-4421-b85e-906177d2303f/ww-config.js';
import wwobject1ba25bdfdee94e0ea0b8b3f3128c3b65 from '@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js';
/* wwFront:end */

export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0': getInheritedConfiguration({ ...plugin6cbfb394eb874d178df637ebc95e66d0, name: 'plugin-6cbfb394-eb87-4d17-8df6-37ebc95e66d0' }),
'plugin-f5856798-485d-47be-b433-d43d771c64e1': getInheritedConfiguration({ ...pluginf5856798485d47beb433d43d771c64e1, name: 'plugin-f5856798-485d-47be-b433-d43d771c64e1' }),
'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811': getInheritedConfiguration({ ...plugin832d6f7a42c343f1a3ce9a678272f811, name: 'plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811' }),
'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7': getInheritedConfiguration({ ...plugincd33cf33e29f4e8cac26b997fe507ce7, name: 'plugin-cd33cf33-e29f-4e8c-ac26-b997fe507ce7' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...section99586bd32b154d6ba0256a50d07ca845, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'wwobject-58d13ef1-9571-4c1d-86b6-96eff6d719ee': getInheritedConfiguration({ ...wwobject58d13ef195714c1d86b696eff6d719ee, name: 'wwobject-58d13ef1-9571-4c1d-86b6-96eff6d719ee' }),
'wwobject-b0d8dcc1-30b2-452e-b6f1-af5fad558a86': getInheritedConfiguration({ ...wwobjectb0d8dcc130b2452eb6f1af5fad558a86, name: 'wwobject-b0d8dcc1-30b2-452e-b6f1-af5fad558a86' }),
'wwobject-12220806-894d-4667-a96e-598262b8d531': getInheritedConfiguration({ ...wwobject12220806894d4667a96e598262b8d531, name: 'wwobject-12220806-894d-4667-a96e-598262b8d531' }),
'wwobject-c98cf519-178d-46c6-a0c3-170bd1699feb': getInheritedConfiguration({ ...wwobjectc98cf519178d46c6a0c3170bd1699feb, name: 'wwobject-c98cf519-178d-46c6-a0c3-170bd1699feb' }),
'wwobject-f55b24ed-07b1-4d29-947e-abf7c37c8ba2': getInheritedConfiguration({ ...wwobjectf55b24ed07b14d29947eabf7c37c8ba2, name: 'wwobject-f55b24ed-07b1-4d29-947e-abf7c37c8ba2' }),
'wwobject-6a0edc41-ab81-46a6-a9ef-7844ef5ea73e': getInheritedConfiguration({ ...wwobject6a0edc41ab8146a6a9ef7844ef5ea73e, name: 'wwobject-6a0edc41-ab81-46a6-a9ef-7844ef5ea73e' }),
'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e': getInheritedConfiguration({ ...wwobject2d18ef4ce9e54dc6a29d01d9f797be5e, name: 'wwobject-2d18ef4c-e9e5-4dc6-a29d-01d9f797be5e' }),
'wwobject-734633a1-457d-4fe5-9eaa-773dddc755f1': getInheritedConfiguration({ ...wwobject734633a1457d4fe59eaa773dddc755f1, name: 'wwobject-734633a1-457d-4fe5-9eaa-773dddc755f1' }),
'wwobject-21881619-a984-4847-81a9-922c3dbb5853': getInheritedConfiguration({ ...wwobject21881619a984484781a9922c3dbb5853, name: 'wwobject-21881619-a984-4847-81a9-922c3dbb5853' }),
'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba': getInheritedConfiguration({ ...wwobjectaeb78b9a6fb64c49931dfaedcfad67ba, name: 'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba' }),
'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b': getInheritedConfiguration({ ...wwobjectfd8c482f532c4aeba7ae6904a6b62a1b, name: 'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...wwobject0d3e75d19e7744cba2728b0825fbc5da, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...wwobject69d0b3efb265494c8cd1874da4aa1834, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...wwobject83d890fb84f94386b459fb4be89a8e15, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398': getInheritedConfiguration({ ...wwobject6ba133b6a444414f93a525cd237dd398, name: 'wwobject-6ba133b6-a444-414f-93a5-25cd237dd398' }),
'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299': getInheritedConfiguration({ ...wwobjectaf811adf94d949ddab22e2f29ae30299, name: 'wwobject-af811adf-94d9-49dd-ab22-e2f29ae30299' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...wwobject6f8796b18273498d95fc7013b7c63214, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-73a13eff-bdc7-4021-bdc6-413c97fe91c1': getInheritedConfiguration({ ...wwobject73a13effbdc74021bdc6413c97fe91c1, name: 'wwobject-73a13eff-bdc7-4021-bdc6-413c97fe91c1' }),
'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5': getInheritedConfiguration({ ...wwobject9256b033f4e84ab4adcedac3a940d7f5, name: 'wwobject-9256b033-f4e8-4ab4-adce-dac3a940d7f5' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...wwobjectd7904e9dfc9a4d809e32728e097879ad, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7': getInheritedConfiguration({ ...wwobjectaa27b26f06864c2998c58217044045b7, name: 'wwobject-aa27b26f-0686-4c29-98c5-8217044045b7' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...wwobject3a7d637912d3438798ffb332bb492a63, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...wwobjectb783dc65d5284f748c14e27c934c39b1, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-8aaf3651-1351-4aea-8b38-5d10ebc7fb69': getInheritedConfiguration({ ...wwobject8aaf365113514aea8b385d10ebc7fb69, name: 'wwobject-8aaf3651-1351-4aea-8b38-5d10ebc7fb69' }),
'wwobject-c8199d0d-b61f-4640-98e0-c4be9ea254e0': getInheritedConfiguration({ ...wwobjectc8199d0db61f464098e0c4be9ea254e0, name: 'wwobject-c8199d0d-b61f-4640-98e0-c4be9ea254e0' }),
'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d': getInheritedConfiguration({ ...wwobject985570fcb3c04566800482ab3b30a11d, name: 'wwobject-985570fc-b3c0-4566-8004-82ab3b30a11d' }),
'wwobject-faf7b16f-26ea-4368-8720-1563d265cd31': getInheritedConfiguration({ ...wwobjectfaf7b16f26ea436887201563d265cd31, name: 'wwobject-faf7b16f-26ea-4368-8720-1563d265cd31' }),
'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061': getInheritedConfiguration({ ...wwobject5a88036f22ea4f8db4a5bc226ef95061, name: 'wwobject-5a88036f-22ea-4f8d-b4a5-bc226ef95061' }),
'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0': getInheritedConfiguration({ ...wwobject6d692ca26cdc4805aa0c211102f335d0, name: 'wwobject-6d692ca2-6cdc-4805-aa0c-211102f335d0' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...wwobject1b1e21739b7842cca8eea6167caea340, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb': getInheritedConfiguration({ ...wwobjectd2eeb897ad9549e48394fe3f5c9a81fb, name: 'wwobject-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb' }),
'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82': getInheritedConfiguration({ ...wwobject59dca300db7842e4a7a60cbf22d3cc82, name: 'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82' }),
'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff': getInheritedConfiguration({ ...wwobject9ecb2cfccef74be8b7363e17a3b7e9ff, name: 'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...wwobjectdeb10a015eef4aa190171b51c2ad6fd0, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' }),
'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5': getInheritedConfiguration({ ...wwobject9ae1fce82e314bfda4d20450235bdfd5, name: 'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5' }),
'wwobject-6145eb60-0af8-4e52-bcc6-dc0f6743654e': getInheritedConfiguration({ ...wwobject6145eb600af84e52bcc6dc0f6743654e, name: 'wwobject-6145eb60-0af8-4e52-bcc6-dc0f6743654e' }),
'wwobject-e2962a22-03b3-4421-b85e-906177d2303f': getInheritedConfiguration({ ...wwobjecte2962a2203b34421b85e906177d2303f, name: 'wwobject-e2962a22-03b3-4421-b85e-906177d2303f' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...wwobject1ba25bdfdee94e0ea0b8b3f3128c3b65, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});

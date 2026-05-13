import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_tlsUPaC6.mjs';
import { manifest } from './manifest_Ovt_tjaC.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/assessment.astro.mjs');
const _page2 = () => import('./pages/apply.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/assessment.ts", _page1],
    ["src/pages/apply.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "be9c4c75-8451-4df3-91cd-e9a1d0bb1a98",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

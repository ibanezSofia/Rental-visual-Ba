module.exports = [
"[project]/components/cliente/catalogo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Catalogo",
    ()=>Catalogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cliente$2f$equipo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cliente/equipo-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Catalogo() {
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cat, setCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("TODOS");
    const [soloDisponibles, setSoloDisponibles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const resultados = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EQUIPOS"].filter((e)=>{
            const matchCat = cat === "TODOS" || e.categoria === cat;
            const matchQ = q.trim() === "" || e.nombre.toLowerCase().includes(q.toLowerCase()) || e.codigo.toLowerCase().includes(q.toLowerCase());
            const matchDisp = !soloDisponibles || e.stock === "EN_STOCK";
            return matchCat && matchQ && matchDisp;
        });
    }, [
        q,
        cat,
        soloDisponibles
    ]);
    const chips = [
        "TODOS",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORIAS"]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "catalogo",
        className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-2xl font-bold text-foreground",
                                        children: "Catálogo de equipos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/catalogo.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            resultados.length,
                                            " equipos · estado de stock y operatividad en tiempo real"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cliente/catalogo.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cliente/catalogo.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative sm:w-72",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/catalogo.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: q,
                                        onChange: (e)=>setQ(e.target.value),
                                        placeholder: "Buscar por nombre o código…",
                                        className: "h-10 w-full rounded-lg border border-border bg-card pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/catalogo.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cliente/catalogo.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cliente/catalogo.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                            chips.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setCat(c),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", cat === c ? "border-verde bg-verde text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-verde/40 hover:text-foreground"),
                                    children: c === "TODOS" ? "Todos" : c
                                }, c, false, {
                                    fileName: "[project]/components/cliente/catalogo.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSoloDisponibles((v)=>!v),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors", soloDisponibles ? "border-turquesa bg-turquesa text-[#26403e]" : "border-border bg-card text-muted-foreground hover:text-foreground"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                        className: "size-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/catalogo.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    "Solo disponibles"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cliente/catalogo.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cliente/catalogo.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cliente/catalogo.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            resultados.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 rounded-xl border border-dashed border-border py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-display text-lg font-semibold text-foreground",
                        children: "Sin resultados"
                    }, void 0, false, {
                        fileName: "[project]/components/cliente/catalogo.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Probá con otro término o quitá los filtros."
                    }, void 0, false, {
                        fileName: "[project]/components/cliente/catalogo.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cliente/catalogo.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                children: resultados.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cliente$2f$equipo$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EquipoCard"], {
                        equipo: e
                    }, e.id, false, {
                        fileName: "[project]/components/cliente/catalogo.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/cliente/catalogo.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cliente/catalogo.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/cliente/equipo-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EquipoCard",
    ()=>EquipoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.17.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/status.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function EquipoCard({ equipo }) {
    const stock = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stockConfig"][equipo.stock];
    const op = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["operativoConfig"][equipo.operatividad];
    const disponible = equipo.stock === "EN_STOCK";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "group flex flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/equipo/${equipo.id}`,
                className: "relative aspect-[4/3] overflow-hidden bg-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: equipo.imagen || "/placeholder.svg",
                        alt: equipo.nombre,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, 33vw",
                        className: "object-cover transition-transform duration-300 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/components/cliente/equipo-card.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-3 top-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            tone: "gris",
                            className: "bg-card/90 backdrop-blur",
                            children: equipo.categoria
                        }, void 0, false, {
                            fileName: "[project]/components/cliente/equipo-card.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cliente/equipo-card.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cliente/equipo-card.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[11px] text-muted-foreground",
                                        children: equipo.codigo
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/equipo-card.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-base font-semibold leading-tight text-foreground",
                                        children: equipo.nombre
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/equipo-card.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                className: "size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-verde"
                            }, void 0, false, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cliente/equipo-card.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                tone: stock.tone,
                                children: stock.label
                            }, void 0, false, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                tone: op.tone,
                                children: op.label
                            }, void 0, false, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cliente/equipo-card.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-1 text-xs text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$17$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "size-3.5"
                            }, void 0, false, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            equipo.ubicacion,
                            !disponible && equipo.disponibleDesde && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-auto text-arena",
                                children: [
                                    "Libre ",
                                    equipo.disponibleDesde
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cliente/equipo-card.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-end justify-between border-t border-border pt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-lg font-bold text-foreground",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatARS"])(equipo.precioDia)
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/equipo-card.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-muted-foreground",
                                        children: "por día"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cliente/equipo-card.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/equipo/${equipo.id}`,
                                className: "rounded-lg bg-muted px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-verde hover:text-primary-foreground",
                                children: "Ver detalle"
                            }, void 0, false, {
                                fileName: "[project]/components/cliente/equipo-card.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cliente/equipo-card.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cliente/equipo-card.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cliente/equipo-card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/status.ts [app-ssr] (ecmascript)");
;
;
;
function Badge({ tone = "gris", className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$status$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toneClasses"][tone], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.3_@babel+core@7.2_0885a53fd20e1b25a89a7d5eb7b84b76/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$3_$40$babel$2b$core$40$7$2e$2_0885a53fd20e1b25a89a7d5eb7b84b76$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALQUILERES_ACTIVOS",
    ()=>ALQUILERES_ACTIVOS,
    "ALQUILERES_CLIENTE",
    ()=>ALQUILERES_CLIENTE,
    "CATEGORIAS",
    ()=>CATEGORIAS,
    "EQUIPOS",
    ()=>EQUIPOS,
    "PRE_RESERVAS",
    ()=>PRE_RESERVAS,
    "formatARS",
    ()=>formatARS,
    "getEquipo",
    ()=>getEquipo
]);
const CATEGORIAS = [
    "Cámaras",
    "Lentes/Ópticas",
    "Sonido",
    "Iluminación",
    "Generadores"
];
const img = {
    camara: "/equipos/camara.png",
    optica: "/equipos/optica.png",
    sonido: "/equipos/sonido.png",
    iluminacion: "/equipos/iluminacion.png",
    generador: "/equipos/generador.png"
};
const EQUIPOS = [
    {
        id: "cam-001",
        codigo: "CAM-A-001",
        nombre: "Sony FX6 Full Frame",
        categoria: "Cámaras",
        imagen: img.camara,
        precioDia: 42000,
        descripcion: "Cámara de cine full frame para documental y publicidad. Cuerpo compacto, doble ranura CFexpress y autofoco de detección en tiempo real.",
        especificaciones: [
            {
                label: "Sensor",
                value: "Full Frame 10.2MP"
            },
            {
                label: "ISO",
                value: "Dual Base 800 / 12800"
            },
            {
                label: "Grabación",
                value: "4K 120fps"
            },
            {
                label: "Montura",
                value: "Sony E"
            }
        ],
        ubicacion: "Estante A1",
        stock: "EN_STOCK",
        operatividad: "OPERATIVO"
    },
    {
        id: "cam-002",
        codigo: "CAM-A-002",
        nombre: "Blackmagic URSA 12K",
        categoria: "Cámaras",
        imagen: img.camara,
        precioDia: 58000,
        descripcion: "Cámara de cine digital de alta resolución para producciones exigentes con flujo RAW.",
        especificaciones: [
            {
                label: "Sensor",
                value: "Super 35 12K"
            },
            {
                label: "Rango dinámico",
                value: "14 stops"
            },
            {
                label: "Grabación",
                value: "BRAW 12K 60fps"
            },
            {
                label: "Montura",
                value: "PL / EF"
            }
        ],
        ubicacion: "Estante A2",
        stock: "ALQUILADO",
        operatividad: "OPERATIVO",
        disponibleDesde: "28/09"
    },
    {
        id: "opt-001",
        codigo: "OPT-B-014",
        nombre: "Set Sigma Cine 24-35-50mm",
        categoria: "Lentes/Ópticas",
        imagen: img.optica,
        precioDia: 31000,
        descripcion: "Juego de ópticas cine T1.5 con foco parfocal y engranajes estandarizados para follow focus.",
        especificaciones: [
            {
                label: "Apertura",
                value: "T1.5"
            },
            {
                label: "Cobertura",
                value: "Full Frame"
            },
            {
                label: "Montura",
                value: "PL"
            },
            {
                label: "Piezas",
                value: "3 lentes"
            }
        ],
        ubicacion: "Estante B4",
        stock: "EN_STOCK",
        operatividad: "OPERATIVO_CON_OBSERVACIONES"
    },
    {
        id: "opt-002",
        codigo: "OPT-B-021",
        nombre: "Canon CN-E 70-200mm",
        categoria: "Lentes/Ópticas",
        imagen: img.optica,
        precioDia: 27000,
        descripcion: "Zoom telefoto cine ideal para cobertura de eventos y planos comprimidos.",
        especificaciones: [
            {
                label: "Apertura",
                value: "T4.4"
            },
            {
                label: "Cobertura",
                value: "Super 35"
            },
            {
                label: "Montura",
                value: "EF"
            },
            {
                label: "Peso",
                value: "1.25 kg"
            }
        ],
        ubicacion: "Estante B5",
        stock: "EN_SERVICIO_TECNICO",
        operatividad: "EN_REPARACION",
        disponibleDesde: "02/10"
    },
    {
        id: "son-001",
        codigo: "SON-C-009",
        nombre: "Zoom F8n Pro",
        categoria: "Sonido",
        imagen: img.sonido,
        precioDia: 18000,
        descripcion: "Grabador y mixer de campo de 8 canales con conversores de 32-bit float.",
        especificaciones: [
            {
                label: "Canales",
                value: "8 in / 10 track"
            },
            {
                label: "Resolución",
                value: "32-bit float"
            },
            {
                label: "Alimentación",
                value: "AA / L-mount"
            },
            {
                label: "Timecode",
                value: "Sí"
            }
        ],
        ubicacion: "Estante C2",
        stock: "EN_STOCK",
        operatividad: "OPERATIVO"
    },
    {
        id: "son-002",
        codigo: "SON-C-012",
        nombre: "Sennheiser MKH 416",
        categoria: "Sonido",
        imagen: img.sonido,
        precioDia: 9500,
        descripcion: "Micrófono shotgun de referencia para exteriores, direccional y de bajo ruido.",
        especificaciones: [
            {
                label: "Patrón",
                value: "Supercardioide"
            },
            {
                label: "Respuesta",
                value: "40Hz - 20kHz"
            },
            {
                label: "Alimentación",
                value: "Phantom 48V"
            },
            {
                label: "Conector",
                value: "XLR-3"
            }
        ],
        ubicacion: "Estante C3",
        stock: "ALQUILADO",
        operatividad: "OPERATIVO",
        disponibleDesde: "26/09"
    },
    {
        id: "ilu-001",
        codigo: "ILU-D-005",
        nombre: "Aputure 600D Pro",
        categoria: "Iluminación",
        imagen: img.iluminacion,
        precioDia: 22000,
        descripcion: "Luz LED daylight de alta potencia con control por app y montura Bowens.",
        especificaciones: [
            {
                label: "Potencia",
                value: "600W"
            },
            {
                label: "Temperatura",
                value: "5600K"
            },
            {
                label: "CRI",
                value: "96+"
            },
            {
                label: "Montura",
                value: "Bowens"
            }
        ],
        ubicacion: "Estante D1",
        stock: "EN_STOCK",
        operatividad: "OPERATIVO"
    },
    {
        id: "ilu-002",
        codigo: "ILU-D-008",
        nombre: "Astera Titan Tube (x4)",
        categoria: "Iluminación",
        imagen: img.iluminacion,
        precioDia: 26000,
        descripcion: "Set de tubos LED RGB inalámbricos con batería interna y control CRMX.",
        especificaciones: [
            {
                label: "Piezas",
                value: "4 tubos"
            },
            {
                label: "Color",
                value: "RGB + Mint + Amber"
            },
            {
                label: "Batería",
                value: "Hasta 20 h"
            },
            {
                label: "Control",
                value: "CRMX / App"
            }
        ],
        ubicacion: "Estante D3",
        stock: "EN_STOCK",
        operatividad: "SIN_REVISAR"
    },
    {
        id: "gen-001",
        codigo: "GEN-E-002",
        nombre: "Honda EU22i Inverter",
        categoria: "Generadores",
        imagen: img.generador,
        precioDia: 15000,
        descripcion: "Generador inverter silencioso, ideal para rodajes en locación con energía estable.",
        especificaciones: [
            {
                label: "Potencia",
                value: "2200W"
            },
            {
                label: "Autonomía",
                value: "8 h al 25%"
            },
            {
                label: "Ruido",
                value: "48-57 dB"
            },
            {
                label: "Peso",
                value: "21 kg"
            }
        ],
        ubicacion: "Taller técnico",
        stock: "EN_SERVICIO_TECNICO",
        operatividad: "EN_REPARACION",
        disponibleDesde: "30/09"
    },
    {
        id: "gen-002",
        codigo: "GEN-E-004",
        nombre: "Generador Diesel 6kVA",
        categoria: "Generadores",
        imagen: img.generador,
        precioDia: 34000,
        descripcion: "Generador diésel de alta capacidad para producciones grandes y consumo sostenido.",
        especificaciones: [
            {
                label: "Potencia",
                value: "6 kVA"
            },
            {
                label: "Combustible",
                value: "Diésel"
            },
            {
                label: "Autonomía",
                value: "12 h"
            },
            {
                label: "Salidas",
                value: "220V / 380V"
            }
        ],
        ubicacion: "Estante E1",
        stock: "BAJA",
        operatividad: "EN_REPARACION"
    }
];
const ALQUILERES_CLIENTE = [
    {
        id: "RV-2041",
        cliente: "Vos",
        equipos: [
            "Sony FX6 Full Frame",
            "Set Sigma Cine 24-35-50mm"
        ],
        estado: "EN_CURSO",
        fechaInicio: "20/09",
        fechaDevolucion: "25/09",
        total: 365000
    },
    {
        id: "RV-2055",
        cliente: "Vos",
        equipos: [
            "Aputure 600D Pro",
            "Astera Titan Tube (x4)"
        ],
        estado: "CONFIRMADA",
        fechaInicio: "01/10",
        fechaDevolucion: "04/10",
        total: 144000
    },
    {
        id: "RV-2061",
        cliente: "Vos",
        equipos: [
            "Zoom F8n Pro",
            "Sennheiser MKH 416"
        ],
        estado: "PRE-RESERVA",
        fechaInicio: "10/10",
        fechaDevolucion: "12/10",
        total: 55000
    },
    {
        id: "RV-1998",
        cliente: "Vos",
        equipos: [
            "Blackmagic URSA 12K"
        ],
        estado: "CERRADA",
        fechaInicio: "01/09",
        fechaDevolucion: "05/09",
        total: 290000
    }
];
const PRE_RESERVAS = [
    {
        id: "PR-3012",
        cliente: "Productora Sur Cine",
        contacto: "malena@surcine.com",
        equipos: [
            "Sony FX6 Full Frame",
            "Set Sigma Cine 24-35-50mm"
        ],
        fechaInicio: "29/09",
        fechaDevolucion: "03/10",
        total: 365000,
        disponibilidad: "OK"
    },
    {
        id: "PR-3018",
        cliente: "Nicolás Ferreyra (Realizador)",
        contacto: "nico.f@gmail.com",
        equipos: [
            "Blackmagic URSA 12K"
        ],
        fechaInicio: "27/09",
        fechaDevolucion: "29/09",
        total: 174000,
        disponibilidad: "CONFLICTO"
    },
    {
        id: "PR-3021",
        cliente: "Estudio Rivera",
        contacto: "hola@estudiorivera.ar",
        equipos: [
            "Aputure 600D Pro",
            "Astera Titan Tube (x4)"
        ],
        fechaInicio: "05/10",
        fechaDevolucion: "08/10",
        total: 144000,
        disponibilidad: "OK"
    }
];
const ALQUILERES_ACTIVOS = [
    {
        id: "RV-2041",
        cliente: "Productora Norte",
        equipos: [
            "Blackmagic URSA 12K"
        ],
        estado: "EN_CURSO",
        fechaInicio: "22/09",
        fechaDevolucion: "22/09",
        total: 174000
    },
    {
        id: "RV-2033",
        cliente: "Sonidista M. Paz",
        equipos: [
            "Sennheiser MKH 416"
        ],
        estado: "EN_CURSO",
        fechaInicio: "18/09",
        fechaDevolucion: "21/09",
        total: 38000,
        mora: true,
        diasAtraso: 1
    },
    {
        id: "RV-2029",
        cliente: "Colectivo Audiovisual La Boca",
        equipos: [
            "Aputure 600D Pro"
        ],
        estado: "EN_CURSO",
        fechaInicio: "15/09",
        fechaDevolucion: "20/09",
        total: 110000,
        mora: true,
        diasAtraso: 2
    }
];
function formatARS(n) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(n);
}
function getEquipo(id) {
    return EQUIPOS.find((e)=>e.id === id);
}
}),
"[project]/lib/status.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alquilerConfig",
    ()=>alquilerConfig,
    "operativoConfig",
    ()=>operativoConfig,
    "stockConfig",
    ()=>stockConfig,
    "toneClasses",
    ()=>toneClasses
]);
const toneClasses = {
    verde: "bg-verde/12 text-verde border-verde/25",
    turquesa: "bg-turquesa/25 text-[#26403e] border-turquesa/50",
    arena: "bg-arena/25 text-[#4a3327] border-arena/50",
    gris: "bg-gris-calido/15 text-gris-calido border-gris-calido/30",
    mora: "bg-destructive/12 text-destructive border-destructive/30",
    warning: "bg-warning/15 text-warning border-warning/35"
};
const stockConfig = {
    EN_STOCK: {
        label: "En stock",
        tone: "verde"
    },
    ALQUILADO: {
        label: "Alquilado",
        tone: "arena"
    },
    EN_SERVICIO_TECNICO: {
        label: "En servicio técnico",
        tone: "warning"
    },
    BAJA: {
        label: "Baja",
        tone: "gris"
    }
};
const operativoConfig = {
    OPERATIVO: {
        label: "Operativo",
        tone: "verde"
    },
    OPERATIVO_CON_OBSERVACIONES: {
        label: "Operativo con observaciones",
        tone: "warning"
    },
    EN_REPARACION: {
        label: "En reparación",
        tone: "mora"
    },
    SIN_REVISAR: {
        label: "Sin revisar",
        tone: "gris"
    }
};
const alquilerConfig = {
    "PRE-RESERVA": {
        label: "Pre-reserva",
        tone: "arena"
    },
    CONFIRMADA: {
        label: "Confirmada",
        tone: "turquesa"
    },
    EN_CURSO: {
        label: "En curso",
        tone: "verde"
    },
    CERRADA: {
        label: "Cerrada",
        tone: "gris"
    }
};
}),
];

//# sourceMappingURL=_0lcs3hu._.js.map
import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default 
[
    index("routes/landing/index.tsx"),
    ...prefix("business",[
        route("private-limited", "routes/business/private-limited.tsx"),
        route("llp", "routes/business/llp.tsx"),
        route("partnership", "routes/business/partnership.tsx"),
        // route("public-limited", "routes/business/public-limited.tsx"),
        // route("opc", "routes/business/opc.tsx"),
        // route("startup", "routes/business/startup.tsx"),
        // route("sole-proprietorship", "routes/business/sole-proprietorship.tsx"),
    ]),
    ...prefix("api", [
        route("send-inquiry", "routes/api/send-inquiry.ts")
    ])
] satisfies RouteConfig;

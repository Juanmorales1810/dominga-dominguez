import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
    const userAgent = context.request.headers.get("user-agent") || "";

    if (
        context.url.pathname.startsWith("/api") &&
        userAgent.toLowerCase().includes("dotbot")
    ) {
        return new Response("Forbidden", { status: 403 });
    }

    return next();
};

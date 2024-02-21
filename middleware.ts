import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // 这下面是未登录用户可以访问的路由
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
  // 这下面是所有用户都可以访问的路由
  ignoredRoutes:[]
});
 
export const config = {
  // 这里表示本中间件文件所适用的路由
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
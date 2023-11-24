// export enum AppRoutes {
//     MAIN = "main",
//     ABOUT = "about",
//     PRODUCTS = "products",
//     PRODUCT = "product",
//     SUBMIT_APPLICATION = "submit_application",
//     // ***
//     NOT_FOUND = "not_found",
// }

export const getRouteMain = () => "/";
export const getRouteAbout = () => "/#about";
export const getRouteProducts = () => "/products";
export const getRouteProduct = (id: string) => `/products/${id}`;
export const getRouteSubmitApplication = () => "/#submitApplication";
export const getRouteForbidden = () => "/forbidden";

// export const AppRouteByPathPattern: Record<string, AppRoutes> = {
//     [getRouteMain()]: AppRoutes.MAIN,
//     [getRouteAbout()]: AppRoutes.ABOUT,
//     [getRouteProducts()]: AppRoutes.PRODUCTS,
//     [getRouteProduct(":id")]: AppRoutes.PRODUCT,
//     [getRouteSubmitApplication()]: AppRoutes.SUBMIT_APPLICATION,
//     [getRouteForbidden()]: AppRoutes.NOT_FOUND,
// };

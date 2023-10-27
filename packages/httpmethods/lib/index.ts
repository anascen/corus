import * as http from "http";

/*
 * Fetch methods from the http module
 * And convert them to lowercase
 */
const getMethodsFromHttp = (): string[] =>
    http.METHODS?.map((method) => method.toLowerCase()) || [];

/*
 * Statically typed methods in string
 * And return them
 */
const getMethodsFromString = (): string[] =>
    [
        "acl",
        "bind",
        "checkout",
        "connect",
        "copy",
        "delete",
        "get",
        "head",
        "link",
        "lock",
        "m-search",
        "merge",
        "mkactivity",
        "mkcalendar",
        "mkcol",
        "move",
        "notify",
        "options",
        "patch",
        "post",
        "propfind",
        "proppatch",
        "purge",
        "put",
        "rebind",
        "report",
        "search",
        "source",
        "subscribe",
        "trace",
        "unbind",
        "unlink",
        "unlock",
        "unsubscribe",
    ] || [];

/*
 * Exported functions conditionally
 */
export default getMethodsFromHttp() || getMethodsFromString();

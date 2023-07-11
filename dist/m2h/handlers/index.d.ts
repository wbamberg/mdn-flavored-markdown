import { code } from "./code.js";
export declare function buildLocalizedHandlers(locale: string): {
    code: typeof code;
    paragraph(h: any, node: any): any;
    blockquote(h: any, node: any): any;
    list(h: any, node: any): any;
};

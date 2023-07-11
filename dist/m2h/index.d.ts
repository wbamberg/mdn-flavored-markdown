interface ProcessorOptions {
    locale?: string;
}
export declare function m2h(md: string, options: ProcessorOptions): Promise<any>;
export declare function m2hSync(md: string, options: ProcessorOptions): any;
export {};

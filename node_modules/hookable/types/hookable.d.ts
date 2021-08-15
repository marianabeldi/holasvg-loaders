declare type unregHookT = () => void;
declare type hookFnT = (...args: any) => Promise<void> | void;
declare type configHooksT = {
    [name: string]: configHooksT | hookFnT;
};
declare type deprecatedHookT = string | {
    message: string;
    to: string;
};
declare type deprecatedHooksT = {
    [name: string]: deprecatedHookT;
};
declare type flatHooksT = {
    [name: string]: hookFnT;
};
interface LoggerT {
    error(...args: any): void;
    fatal?(...args: any): void;
    warn(...args: any): void;
}

declare function mergeHooks(...hooks: configHooksT[]): flatHooksT;

declare class Hookable {
    private _hooks;
    private _deprecatedHooks;
    private _logger;
    static mergeHooks: typeof mergeHooks;
    mergeHooks: typeof mergeHooks;
    constructor(logger?: LoggerT | false);
    hook(name: string, fn: hookFnT): () => void;
    hookOnce(name: string, fn: hookFnT): any;
    removeHook(name: string, fn: hookFnT): void;
    deprecateHook(name: string, deprecated: deprecatedHookT): void;
    deprecateHooks(deprecatedHooks: deprecatedHooksT): void;
    addHooks(configHooks: configHooksT): () => void;
    removeHooks(configHooks: configHooksT): void;
    callHook(name: string, ...args: any): Promise<void>;
}

export default Hookable;
export { LoggerT, configHooksT, deprecatedHookT, deprecatedHooksT, flatHooksT, hookFnT, unregHookT };

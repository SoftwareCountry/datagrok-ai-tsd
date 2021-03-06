declare module "datagrok-api/src/utils" {

    export function range(length: number): Generator<number, void>

    /** Returns an 'identity' array where the element in idx-th position is equals to idx. */
    export function identity(length: number): number[]

    /*window.onerror = function (message, url, lineNumber, columnNumber, errorObject) {
        return grok_Error(message, url, lineNumber, columnNumber, errorObject);
    };*/

    export function time<T>(s: string, f: () => T): T
}
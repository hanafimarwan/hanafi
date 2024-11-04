declare module 'xml2js' {
    export function parseString(xml: string, callback: (err: any, result: any) => void): void;

    export class Builder {
        buildObject(obj: any): string;
    }
}

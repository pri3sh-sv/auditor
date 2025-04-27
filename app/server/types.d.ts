/**
 * Type declarations for modules without their own type definitions
 */

declare module 'html-to-json' {
  interface ParseOptions {
    [key: string]: (doc: any) => any;
  }

  interface HtmlToJson {
    parse: (html: string, options: ParseOptions) => Promise<any>;
    request: (url: string, options: ParseOptions) => Promise<any>;
  }

  const htmlToJson: HtmlToJson;
  export default htmlToJson;
} 
declare module 'split-text-js' {
    export default class SplitTextJS {
      constructor(element: HTMLElement | string);
      chars: HTMLElement[];
      words: HTMLElement[];
      lines: HTMLElement[];
    }
  }
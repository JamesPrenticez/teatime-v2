// For .vue files
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// For JSX/TSX support
declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any;
  }
}
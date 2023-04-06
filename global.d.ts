export { }
declare global {
  namespace JSX {
    interface IntrinsicElements {
      color: any,
      mesh: any,
      group: any,
      directionalLight: any,
      hemisphereLight: any
    }
  }
}

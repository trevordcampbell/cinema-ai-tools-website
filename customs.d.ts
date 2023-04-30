declare module "*.png"
declare module "*.svg"
declare module "*.jpeg"
declare module "*.jpg"

// CODESNIPPET - Alternate module declarations in case image imports stop working for some reason...
// declare module "*.png" {
//   const path: string;
//   export default path;
// }

// declare module "*.svg" {
//   const path: string;
//   export default path;
// }

// declare module "*.jpeg" {
//   const path: string;
//   export default path;
// }

// declare module "*.jpg" {
//   const path: string;
//   export default path;
// }

declare module "focus-visible"
declare module "prettier-plugin-tailwindcss"
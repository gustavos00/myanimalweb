import * as React from 'react'

declare module "*.svg" {
    const content: any;
    export default content;
  }
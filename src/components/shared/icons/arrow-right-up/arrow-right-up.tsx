import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.669 6.276 4.93 12.014l-.943-.943 5.738-5.738H4.669V4h7.333v7.333H10.67V6.276Z"
    />
  </svg>
)
export default SvgComponent

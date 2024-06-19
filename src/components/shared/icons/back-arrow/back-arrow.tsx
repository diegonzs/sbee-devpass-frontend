import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FFC70F"
      d="m7.597 17.178-5.93-5.499 5.93-5.5L8.86 7.54l-3.466 3.213h16.94v1.854H5.394L8.86 15.82l-1.263 1.358Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.8}
      d="m7.597 17.178-5.93-5.499 5.93-5.5L8.86 7.54l-3.466 3.213h16.94v1.854H5.394L8.86 15.82l-1.263 1.358Z"
    />
  </svg>
)
export default SvgComponent

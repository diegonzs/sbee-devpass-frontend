import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="#currentColor"
      fillRule="evenodd"
      d="M7.529 1.362c.26-.26.682-.26.942 0l2.667 2.667a.667.667 0 0 1-.943.943L8.667 3.443V10.5a.667.667 0 1 1-1.334 0V3.443L5.805 4.972a.667.667 0 1 1-.943-.943l2.667-2.667ZM2.667 7.834c.368 0 .666.298.666.666v5.334A.667.667 0 0 0 4 14.5h8a.667.667 0 0 0 .667-.666V8.5A.667.667 0 1 1 14 8.5v5.334a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5c0-.368.298-.666.667-.666Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent

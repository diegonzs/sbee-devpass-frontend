import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      fill="#FEEBA9"
      fillRule="evenodd"
      d="M20.42 3.465c.416.177.685.584.685 1.035v10.497H27a1.125 1.125 0 0 1 .98 1.679l-.739 1.306a53.626 53.626 0 0 1-10.575 13.263l-1.193 1.087a1.125 1.125 0 0 1-1.883-.832V21.092H7.5a1.125 1.125 0 0 1-.98-1.679 53.703 53.703 0 0 1 10.013-13.16L19.2 3.69c.325-.313.806-.4 1.22-.224ZM9.428 18.842h5.288c.621 0 1.125.503 1.125 1.125v8.975a51.375 51.375 0 0 0 9.23-11.695h-5.09a1.125 1.125 0 0 1-1.125-1.125v-8.98l-.762.733a51.453 51.453 0 0 0-8.666 10.967Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent

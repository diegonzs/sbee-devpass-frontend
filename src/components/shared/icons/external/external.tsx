import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 12"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.715 1.619a.405.405 0 0 1 0 .572l-3.69 3.69a.405.405 0 1 1-.572-.572l3.69-3.69a.405.405 0 0 1 .572 0Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.334 1.41a.41.41 0 0 1 .41-.41h2.18a.41.41 0 0 1 .41.41v2.18a.41.41 0 0 1-.818 0V1.819H8.743a.41.41 0 0 1-.409-.409ZM2.2 1.866C2.832 1.235 3.77 1 4.958 1h.917a.413.413 0 0 1 0 .826h-.917c-1.106 0-1.773.223-2.174.624-.4.4-.624 1.068-.624 2.174v2.752c0 1.106.223 1.773.624 2.174.4.4 1.068.624 2.174.624H7.71c1.106 0 1.773-.223 2.174-.624.4-.4.624-1.068.624-2.174V6.46a.413.413 0 1 1 .826 0v.917c0 1.188-.235 2.126-.866 2.758-.632.631-1.57.866-2.758.866H4.958c-1.188 0-2.126-.235-2.758-.866-.631-.632-.866-1.57-.866-2.758V4.624c0-1.188.235-2.126.866-2.758Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent

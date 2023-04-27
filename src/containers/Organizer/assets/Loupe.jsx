import * as React from "react"

const Loupe = (props) => (
  <svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={6.933} cy={7.433} r={5.933} stroke="#fff" strokeWidth={2} />
    <path
      d="m16 16.5-4.267-4.267"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
)

export default Loupe
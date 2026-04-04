import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitHearts({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9.00003 16.25C9.00003 13.575 13.476 9.01699 14.515 7.59599C15.554 6.17499 15.613 4.58999 14.245 3.40099C12.716 2.07199 10.157 2.83999 9.00003 5.11799C7.84303 2.83899 5.28503 2.07199 3.75503 3.40099C2.38703 4.58999 2.44503 6.17499 3.48503 7.59599C4.52503 9.01699 9.00003 13.574 9.00003 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.00003 16.25C9.00003 13.575 13.476 9.01699 14.515 7.59599C15.554 6.17499 15.613 4.58999 14.245 3.40099C12.716 2.07199 10.157 2.83999 9.00003 5.11799C7.84303 2.83899 5.28503 2.07199 3.75503 3.40099C2.38703 4.58999 2.44503 6.17499 3.48503 7.59599C4.52503 9.01699 9.00003 13.574 9.00003 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SuitHearts;

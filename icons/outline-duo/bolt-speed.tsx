import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoltSpeed({
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
          d="m11.15,16.127l5.397-7.987c.112-.166-.007-.39-.207-.39h-4.779l.846-5.707c.037-.252-.293-.381-.436-.169l-5.397,7.987c-.112.166.007.39.207.39h4.779l-.846,5.707c-.037.252.293.381.436.169Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.15,16.127l5.397-7.987c.112-.166-.007-.39-.207-.39h-4.779l.846-5.707c.037-.252-.293-.381-.436-.169l-5.397,7.987c-.112.166.007.39.207.39h4.779l-.846,5.707c-.037.252.293.381.436.169Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1=".75"
          x2="4"
          y1="9"
          y2="9"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.25"
          x2="5.25"
          y1="5.75"
          y2="5.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.25"
          x2="5.25"
          y1="12.25"
          y2="12.25"
        />
      </g>
    </svg>
  );
}

export default BoltSpeed;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stamp({
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
          d="M3.75 14.25V15.25H14.25V14.25H3.75Z"
          fill={secondaryfill}
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.3232 9.75H10.5L11.04 3.99017C11.1527 2.78827 10.2072 1.75 9.00003 1.75C7.79293 1.75 6.84733 2.78827 6.96003 3.99017L7.50003 9.75H3.67683C2.78303 9.75 2.08753 10.5268 2.18593 11.4152L2.50003 14.25H15.5L15.8141 11.4152C15.9125 10.5268 15.2171 9.75 14.3232 9.75Z"
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

export default Stamp;

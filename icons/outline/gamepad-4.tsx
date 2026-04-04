import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad4({
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
        <circle
          cx="5.625"
          cy="7.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="4.75"
          cy="13.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="6.25"
          cy="11.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="12.375"
          cy="10.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <circle
          cx="13.25"
          cy="4.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.75"
          cy="6.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <path
          d="M9,16.25h-3.75c-1.657,0-3-1.343-3-3V6.75c0-1.657,1.343-3,3-3h3.75v12.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,3.75V1.75s3.75,0,3.75,0c1.657,0,3,1.343,3,3v6.5c0,1.657-1.343,3-3,3h-3.75"
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

export default Gamepad4;

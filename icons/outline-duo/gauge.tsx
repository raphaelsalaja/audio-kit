import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge({
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
          d="M4.009 15.25H13.991C15.38 13.929 16.25 12.068 16.25 10C16.25 5.996 13.004 2.75 9 2.75C4.996 2.75 1.75 5.996 1.75 10C1.75 12.068 2.62 13.929 4.009 15.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.009 15.25H13.991C15.38 13.929 16.25 12.068 16.25 10C16.25 5.996 13.004 2.75 9 2.75C4.996 2.75 1.75 5.996 1.75 10C1.75 12.068 2.62 13.929 4.009 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00005 10L5.89404 6.89401"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 10C4.75 10.81 4.975 11.581 5.398 12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.603 12.25C13.025 11.581 13.25 10.81 13.25 10C13.25 7.657 11.343 5.75 9 5.75"
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

export default Gauge;

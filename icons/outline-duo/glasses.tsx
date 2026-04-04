import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Glasses({
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
          d="M4.75 14.25C6.40685 14.25 7.75 12.9069 7.75 11.25C7.75 9.59315 6.40685 8.25 4.75 8.25C3.09315 8.25 1.75 9.59315 1.75 11.25C1.75 12.9069 3.09315 14.25 4.75 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 14.25C14.9069 14.25 16.25 12.9069 16.25 11.25C16.25 9.59315 14.9069 8.25 13.25 8.25C11.5931 8.25 10.25 9.59315 10.25 11.25C10.25 12.9069 11.5931 14.25 13.25 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 11.25C7.75 10.56 8.31 10 9 10C9.69 10 10.25 10.56 10.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.83801 10.527L2.97501 4.34799C3.24001 3.06099 4.65301 2.37499 5.82801 2.96199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.162 10.527L15.025 4.34799C14.76 3.06099 13.347 2.37499 12.172 2.96199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 14.25C6.40685 14.25 7.75 12.9069 7.75 11.25C7.75 9.59315 6.40685 8.25 4.75 8.25C3.09315 8.25 1.75 9.59315 1.75 11.25C1.75 12.9069 3.09315 14.25 4.75 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.25C14.9069 14.25 16.25 12.9069 16.25 11.25C16.25 9.59315 14.9069 8.25 13.25 8.25C11.5931 8.25 10.25 9.59315 10.25 11.25C10.25 12.9069 11.5931 14.25 13.25 14.25Z"
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

export default Glasses;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cookie({
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
          d="M14.75,8c-1.91,0-3.469-1.433-3.703-3.28-.099,.01-.195,.03-.297,.03-1.618,0-2.928-1.283-2.989-2.887-3.413,.589-6.011,3.556-6.011,7.137,0,4.004,3.246,7.25,7.25,7.25s7.25-3.246,7.25-7.25c0-.434-.045-.857-.118-1.271-.428,.17-.893,.271-1.382,.271Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="12.25"
          cy="1.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="14.75"
          cy="4.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="11.25"
          cy="11.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="7" cy="7" fill={secondaryfill} r="1" stroke="none" />
        <circle
          cx="7.25"
          cy="11.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Cookie;

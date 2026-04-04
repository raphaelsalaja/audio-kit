import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggle2({
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
          d="M6.5 3.75H11.5C14.3995 3.75 16.75 6.10051 16.75 9C16.75 11.8995 14.3995 14.25 11.5 14.25H6.5C3.60051 14.25 1.25 11.8995 1.25 9C1.25 6.10051 3.60051 3.75 6.5 3.75ZM8.75 9C8.75 10.2426 7.74264 11.25 6.5 11.25C5.25736 11.25 4.25 10.2426 4.25 9C4.25 7.75736 5.25736 6.75 6.5 6.75C7.74264 6.75 8.75 7.75736 8.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M11.5 3.75H6.5C3.60051 3.75 1.25 6.10051 1.25 9C1.25 11.8995 3.60051 14.25 6.5 14.25H11.5C14.3995 14.25 16.75 11.8995 16.75 9C16.75 6.10051 14.3995 3.75 11.5 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 11.25C7.74264 11.25 8.75 10.2426 8.75 9C8.75 7.75736 7.74264 6.75 6.5 6.75C5.25736 6.75 4.25 7.75736 4.25 9C4.25 10.2426 5.25736 11.25 6.5 11.25Z"
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

export default Toggle2;

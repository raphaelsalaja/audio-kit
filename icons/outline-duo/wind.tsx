import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wind({
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
          cx="10.75"
          cy="3.75"
          fill={secondaryfill}
          fillOpacity="0.3"
          r="2"
          stroke="none"
        />
        <circle
          cx="13.25"
          cy="11"
          fill={secondaryfill}
          fillOpacity="0.3"
          r="2"
          stroke="none"
        />
        <circle
          cx="7"
          cy="14.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          r="2"
          stroke="none"
        />
        <path
          d="M2.75 9H13.25C14.355 9 15.25 9.895 15.25 11C15.25 12.105 14.355 13 13.25 13C12.355 13 11.597 12.412 11.342 11.601"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 12.25H7C8.105 12.25 9 13.145 9 14.25C9 15.355 8.105 16.25 7 16.25C6.105 16.25 5.347 15.662 5.092 14.851"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 5.75H10.75C11.855 5.75 12.75 4.855 12.75 3.75C12.75 2.645 11.855 1.75 10.75 1.75C9.855 1.75 9.097 2.338 8.842 3.149"
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

export default Wind;

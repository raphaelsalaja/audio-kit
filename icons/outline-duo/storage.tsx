import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Storage({
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
          d="M9 8.75C12.4518 8.75 15.25 7.29493 15.25 5.5C15.25 3.70507 12.4518 2.25 9 2.25C5.54822 2.25 2.75 3.70507 2.75 5.5C2.75 7.29493 5.54822 8.75 9 8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 8.75C12.4518 8.75 15.25 7.29493 15.25 5.5C15.25 3.70507 12.4518 2.25 9 2.25C5.54822 2.25 2.75 3.70507 2.75 5.5C2.75 7.29493 5.54822 8.75 9 8.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.193 9.44202C14.778 11.028 12.164 12.25 9.00001 12.25C5.83701 12.25 3.22201 11.028 2.80701 9.44202"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.193 12.942C14.778 14.528 12.164 15.75 9.00001 15.75C5.83701 15.75 3.22201 14.528 2.80701 12.942"
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

export default Storage;

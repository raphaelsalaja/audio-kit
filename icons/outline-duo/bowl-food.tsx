import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BowlFood({
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
          d="M6.32 14.25H11.681C14.439 13.153 16.249 10.718 16.251 7.75H1.75C1.752 10.718 3.562 13.153 6.32 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.5 6C3.12 6 2 4.88 2 3.5C2 3.224 2.224 3 2.5 3C3.88 3 5 4.12 5 5.5C5 5.776 4.776 6 4.5 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.32 14.25H11.681C14.439 13.153 16.249 10.718 16.251 7.75H1.75C1.752 10.718 3.562 13.153 6.32 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 5.25C14.294 4.643 13.568 4.25 12.75 4.25C12.133 4.25 11.576 4.482 11.14 4.853C10.636 3.904 9.65 3.25 8.5 3.25C7.732 3.25 7.031 3.539 6.5 4.014"
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

export default BowlFood;

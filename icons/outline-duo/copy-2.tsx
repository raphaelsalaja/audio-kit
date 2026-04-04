import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copy2({
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
          d="M6.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75L6.75 5.75C5.64543 5.75 4.75 6.64543 4.75 7.75L4.75 13.25C4.75 14.3546 5.64543 15.25 6.75 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 12.25H3.75C2.645 12.25 1.75 11.355 1.75 10.25V4.75C1.75 3.645 2.645 2.75 3.75 2.75H11.25C12.355 2.75 13.25 3.645 13.25 4.75V5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 15.25L14.25 15.25C15.3546 15.25 16.25 14.3546 16.25 13.25V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75L6.75 5.75C5.64543 5.75 4.75 6.64543 4.75 7.75L4.75 13.25C4.75 14.3546 5.64543 15.25 6.75 15.25Z"
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

export default Copy2;

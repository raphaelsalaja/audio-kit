import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareLeft2({
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
          d="M6.25 4.5V1.75L1.75 6L6.25 10.25V7.5C9.875 7.5 12.25 11 12.25 11C12.25 11 12.25 4.5 6.25 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.5V1.75L1.75 6L6.25 10.25V7.5C9.875 7.5 12.25 11 12.25 11C12.25 11 12.25 4.5 6.25 4.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V13.25C15.25 14.355 14.355 15.25 13.25 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V10.75"
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

export default ShareLeft2;

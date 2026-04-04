import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Horizontal({
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
          d="M3.75 7.75V10.25C3.75 10.8023 4.19772 11.25 4.75 11.25H13.25C13.8023 11.25 14.25 10.8023 14.25 10.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75L4.75 6.75C4.19772 6.75 3.75 7.19772 3.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 7.75V10.25C3.75 10.8023 4.19772 11.25 4.75 11.25H13.25C13.8023 11.25 14.25 10.8023 14.25 10.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75L4.75 6.75C4.19772 6.75 3.75 7.19772 3.75 7.75Z"
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

export default Align2Horizontal;

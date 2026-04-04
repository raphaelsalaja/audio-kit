import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Left({
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
          d="M5.75 7.75V10.25C5.75 10.8023 6.19772 11.25 6.75 11.25H14.25C14.8023 11.25 15.25 10.8023 15.25 10.25V7.75C15.25 7.19772 14.8023 6.75 14.25 6.75L6.75 6.75C6.19772 6.75 5.75 7.19772 5.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 16.25V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 7.75V10.25C5.75 10.8023 6.19772 11.25 6.75 11.25H14.25C14.8023 11.25 15.25 10.8023 15.25 10.25V7.75C15.25 7.19772 14.8023 6.75 14.25 6.75L6.75 6.75C6.19772 6.75 5.75 7.19772 5.75 7.75Z"
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

export default Align2Left;

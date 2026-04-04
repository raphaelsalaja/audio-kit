import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2Top({
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
          d="M10.25 5.75H7.75C7.19772 5.75 6.75 6.19772 6.75 6.75V14.25C6.75 14.8023 7.19772 15.25 7.75 15.25H10.25C10.8023 15.25 11.25 14.8023 11.25 14.25V6.75C11.25 6.19772 10.8023 5.75 10.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 2.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 5.75H7.75C7.19772 5.75 6.75 6.19772 6.75 6.75V14.25C6.75 14.8023 7.19772 15.25 7.75 15.25H10.25C10.8023 15.25 11.25 14.8023 11.25 14.25V6.75C11.25 6.19772 10.8023 5.75 10.25 5.75Z"
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

export default Align2Top;

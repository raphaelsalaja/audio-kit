import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies2({
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
          d="M14.25 7.75H3.75C3.19772 7.75 2.75 8.19772 2.75 8.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V8.75C15.25 8.19772 14.8023 7.75 14.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 7.75H3.75C3.19772 7.75 2.75 8.19772 2.75 8.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V8.75C15.25 8.19772 14.8023 7.75 14.25 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 1.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 4.75H13.75"
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

export default Copies2;

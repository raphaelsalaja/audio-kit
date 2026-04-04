import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Prototype({
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
          d="M3.75 1.75C3.19772 1.75 2.75 2.19771 2.75 2.75V15.25C2.75 15.8023 3.19772 16.25 3.75 16.25H9.25C9.80228 16.25 10.25 15.8023 10.25 15.25V13C8.04086 13 6.25 11.2091 6.25 9C6.25 6.79086 8.04086 5 10.25 5V2.75C10.25 2.19772 9.80228 1.75 9.25 1.75H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.25 13.75V15.25C10.25 15.802 9.802 16.25 9.25 16.25H3.75C3.198 16.25 2.75 15.802 2.75 15.25V2.75C2.75 2.198 3.198 1.75 3.75 1.75H9.25C9.802 1.75 10.25 2.198 10.25 2.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.5L17.25 9L14.75 6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 9H12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 10.75C11.2165 10.75 12 9.966 12 9C12 8.034 11.2165 7.25 10.25 7.25C9.2835 7.25 8.5 8.034 8.5 9C8.5 9.966 9.2835 10.75 10.25 10.75Z"
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

export default Prototype;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hotspot({
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
          d="M9 10.25C9.69036 10.25 10.25 9.69036 10.25 9C10.25 8.30964 9.69036 7.75 9 7.75C8.30964 7.75 7.75 8.30964 7.75 9C7.75 9.69036 8.30964 10.25 9 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.157 15.149C3.111 13.867 1.75 11.593 1.75 9C1.75 4.996 4.996 1.75 9 1.75C13.004 1.75 16.25 4.996 16.25 9C16.25 11.593 14.889 13.867 12.843 15.149"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.747 12.604C5.547 11.853 4.75 10.519 4.75 9C4.75 6.653 6.653 4.75 9 4.75C11.347 4.75 13.25 6.653 13.25 9C13.25 10.52 12.452 11.853 11.253 12.604"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.25C9.69036 10.25 10.25 9.69036 10.25 9C10.25 8.30964 9.69036 7.75 9 7.75C8.30964 7.75 7.75 8.30964 7.75 9C7.75 9.69036 8.30964 10.25 9 10.25Z"
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

export default Hotspot;

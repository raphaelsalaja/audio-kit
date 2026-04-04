import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Top({
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
          d="M5.75 2.75H4.25C3.42157 2.75 2.75 3.42157 2.75 4.25V13.75C2.75 14.5784 3.42157 15.25 4.25 15.25H5.75C6.57843 15.25 7.25 14.5784 7.25 13.75V4.25C7.25 3.42157 6.57843 2.75 5.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 2.75H12.25C11.4216 2.75 10.75 3.42157 10.75 4.25V7.75C10.75 8.57843 11.4216 9.25 12.25 9.25H13.75C14.5784 9.25 15.25 8.57843 15.25 7.75V4.25C15.25 3.42157 14.5784 2.75 13.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 2.75H4.25C3.42157 2.75 2.75 3.42157 2.75 4.25V13.75C2.75 14.5784 3.42157 15.25 4.25 15.25H5.75C6.57843 15.25 7.25 14.5784 7.25 13.75V4.25C7.25 3.42157 6.57843 2.75 5.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 2.75H12.25C11.4216 2.75 10.75 3.42157 10.75 4.25V7.75C10.75 8.57843 11.4216 9.25 12.25 9.25H13.75C14.5784 9.25 15.25 8.57843 15.25 7.75V4.25C15.25 3.42157 14.5784 2.75 13.75 2.75Z"
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

export default Align3Top;

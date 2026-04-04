import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Left({
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
          d="M15.25 5.75V4.25C15.25 3.42157 14.5784 2.75 13.75 2.75L4.25 2.75C3.42157 2.75 2.75 3.42157 2.75 4.25V5.75C2.75 6.57843 3.42157 7.25 4.25 7.25L13.75 7.25C14.5784 7.25 15.25 6.57843 15.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 13.75V12.25C9.25 11.4216 8.57843 10.75 7.75 10.75H4.25C3.42157 10.75 2.75 11.4216 2.75 12.25V13.75C2.75 14.5784 3.42157 15.25 4.25 15.25H7.75C8.57843 15.25 9.25 14.5784 9.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 5.75V4.25C15.25 3.42157 14.5784 2.75 13.75 2.75L4.25 2.75C3.42157 2.75 2.75 3.42157 2.75 4.25V5.75C2.75 6.57843 3.42157 7.25 4.25 7.25L13.75 7.25C14.5784 7.25 15.25 6.57843 15.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.25 13.75V12.25C9.25 11.4216 8.57843 10.75 7.75 10.75H4.25C3.42157 10.75 2.75 11.4216 2.75 12.25V13.75C2.75 14.5784 3.42157 15.25 4.25 15.25H7.75C8.57843 15.25 9.25 14.5784 9.25 13.75Z"
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

export default Align3Left;

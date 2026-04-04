import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Horizontal({
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
          d="M2.75 12.25V13.75C2.75 14.5784 3.42157 15.25 4.25 15.25H13.75C14.5784 15.25 15.25 14.5784 15.25 13.75V12.25C15.25 11.4216 14.5784 10.75 13.75 10.75H4.25C3.42157 10.75 2.75 11.4216 2.75 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 4.25V5.75C5.75 6.57843 6.42157 7.25 7.25 7.25H10.75C11.5784 7.25 12.25 6.57843 12.25 5.75V4.25C12.25 3.42157 11.5784 2.75 10.75 2.75H7.25C6.42157 2.75 5.75 3.42157 5.75 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 12.25V13.75C2.75 14.5784 3.42157 15.25 4.25 15.25H13.75C14.5784 15.25 15.25 14.5784 15.25 13.75V12.25C15.25 11.4216 14.5784 10.75 13.75 10.75H4.25C3.42157 10.75 2.75 11.4216 2.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 4.25V5.75C5.75 6.57843 6.42157 7.25 7.25 7.25H10.75C11.5784 7.25 12.25 6.57843 12.25 5.75V4.25C12.25 3.42157 11.5784 2.75 10.75 2.75H7.25C6.42157 2.75 5.75 3.42157 5.75 4.25Z"
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

export default Align3Horizontal;

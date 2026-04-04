import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExpandObj2({
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
          d="M7.25 12.25H10.75C11.5784 12.25 12.25 11.5784 12.25 10.75V7.25C12.25 6.42157 11.5784 5.75 10.75 5.75L7.25 5.75C6.42157 5.75 5.75 6.42157 5.75 7.25L5.75 10.75C5.75 11.5784 6.42157 12.25 7.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 12.25H10.75C11.5784 12.25 12.25 11.5784 12.25 10.75V7.25C12.25 6.42157 11.5784 5.75 10.75 5.75L7.25 5.75C6.42157 5.75 5.75 6.42157 5.75 7.25L5.75 10.75C5.75 11.5784 6.42157 12.25 7.25 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 6.25V3.25C15.75 2.698 15.302 2.25 14.75 2.25H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 15.75H3.25C2.698 15.75 2.25 15.302 2.25 14.75V11.75"
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

export default ExpandObj2;

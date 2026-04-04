import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignHorizontal({
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
          d="M3.75 11.75V13.25C3.75 13.8023 4.19772 14.25 4.75 14.25H13.25C13.8023 14.25 14.25 13.8023 14.25 13.25V11.75C14.25 11.1977 13.8023 10.75 13.25 10.75H4.75C4.19772 10.75 3.75 11.1977 3.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 4.75V6.25C5.75 6.80228 6.19772 7.25 6.75 7.25H11.25C11.8023 7.25 12.25 6.80228 12.25 6.25V4.75C12.25 4.19772 11.8023 3.75 11.25 3.75L6.75 3.75C6.19772 3.75 5.75 4.19772 5.75 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25V14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 3.75V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 11.75V13.25C3.75 13.8023 4.19772 14.25 4.75 14.25H13.25C13.8023 14.25 14.25 13.8023 14.25 13.25V11.75C14.25 11.1977 13.8023 10.75 13.25 10.75H4.75C4.19772 10.75 3.75 11.1977 3.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 4.75V6.25C5.75 6.80228 6.19772 7.25 6.75 7.25H11.25C11.8023 7.25 12.25 6.80228 12.25 6.25V4.75C12.25 4.19772 11.8023 3.75 11.25 3.75L6.75 3.75C6.19772 3.75 5.75 4.19772 5.75 4.75Z"
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

export default AlignHorizontal;

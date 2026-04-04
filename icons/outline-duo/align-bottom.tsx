import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignBottom({
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
          d="M6.25 2.75H4.75C4.19772 2.75 3.75 3.19772 3.75 3.75V11.25C3.75 11.8023 4.19772 12.25 4.75 12.25H6.25C6.80228 12.25 7.25 11.8023 7.25 11.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 6.75H11.75C11.1977 6.75 10.75 7.19772 10.75 7.75V11.25C10.75 11.8023 11.1977 12.25 11.75 12.25H13.25C13.8023 12.25 14.25 11.8023 14.25 11.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 15.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 2.75H4.75C4.19772 2.75 3.75 3.19772 3.75 3.75V11.25C3.75 11.8023 4.19772 12.25 4.75 12.25H6.25C6.80228 12.25 7.25 11.8023 7.25 11.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 6.75H11.75C11.1977 6.75 10.75 7.19772 10.75 7.75V11.25C10.75 11.8023 11.1977 12.25 11.75 12.25H13.25C13.8023 12.25 14.25 11.8023 14.25 11.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
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

export default AlignBottom;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignLeft({
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
          d="M15.25 6.25V4.75C15.25 4.19772 14.8023 3.75 14.25 3.75L6.75 3.75C6.19771 3.75 5.75 4.19772 5.75 4.75V6.25C5.75 6.80228 6.19771 7.25 6.75 7.25H14.25C14.8023 7.25 15.25 6.80228 15.25 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 13.25V11.75C11.25 11.1977 10.8023 10.75 10.25 10.75H6.75C6.19772 10.75 5.75 11.1977 5.75 11.75V13.25C5.75 13.8023 6.19772 14.25 6.75 14.25H10.25C10.8023 14.25 11.25 13.8023 11.25 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.25V4.75C15.25 4.19772 14.8023 3.75 14.25 3.75L6.75 3.75C6.19771 3.75 5.75 4.19772 5.75 4.75V6.25C5.75 6.80228 6.19771 7.25 6.75 7.25H14.25C14.8023 7.25 15.25 6.80228 15.25 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 13.25V11.75C11.25 11.1977 10.8023 10.75 10.25 10.75H6.75C6.19772 10.75 5.75 11.1977 5.75 11.75V13.25C5.75 13.8023 6.19772 14.25 6.75 14.25H10.25C10.8023 14.25 11.25 13.8023 11.25 13.25Z"
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

export default AlignLeft;

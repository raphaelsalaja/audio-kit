import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeIncreaseY({
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
          d="M2.75 11.25L15.25 11.25C15.8023 11.25 16.25 10.8023 16.25 10.25V7.75C16.25 7.19772 15.8023 6.75 15.25 6.75L2.75 6.75C2.19771 6.75 1.75 7.19772 1.75 7.75V10.25C1.75 10.8023 2.19771 11.25 2.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 11.25L15.25 11.25C15.8023 11.25 16.25 10.8023 16.25 10.25V7.75C16.25 7.19772 15.8023 6.75 15.25 6.75L2.75 6.75C2.19771 6.75 1.75 7.19772 1.75 7.75V10.25C1.75 10.8023 2.19771 11.25 2.75 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 3.75L9 1.5L11.25 3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 14.25L9 16.5L11.25 14.25"
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

export default ObjSizeIncreaseY;

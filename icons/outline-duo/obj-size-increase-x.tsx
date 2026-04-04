import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeIncreaseX({
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
          d="M6.75 2.75L6.75 15.25C6.75 15.8023 7.19772 16.25 7.75 16.25H10.25C10.8023 16.25 11.25 15.8023 11.25 15.25V2.75C11.25 2.19771 10.8023 1.75 10.25 1.75H7.75C7.19772 1.75 6.75 2.19771 6.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 2.75L6.75 15.25C6.75 15.8023 7.19772 16.25 7.75 16.25H10.25C10.8023 16.25 11.25 15.8023 11.25 15.25V2.75C11.25 2.19771 10.8023 1.75 10.25 1.75H7.75C7.19772 1.75 6.75 2.19771 6.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 6.75L16.5 9L14.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 6.75L1.5 9L3.75 11.25"
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

export default ObjSizeIncreaseX;

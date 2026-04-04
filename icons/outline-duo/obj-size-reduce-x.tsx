import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjSizeReduceX({
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
          d="M16.5 11.25L14.25 9L16.5 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.5 11.25L3.75 9L1.5 6.75"
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

export default ObjSizeReduceX;

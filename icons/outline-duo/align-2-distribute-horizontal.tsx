import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2DistributeHorizontal({
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
          d="M10.25 3.75H7.75C7.19772 3.75 6.75 4.19772 6.75 4.75V13.25C6.75 13.8023 7.19772 14.25 7.75 14.25H10.25C10.8023 14.25 11.25 13.8023 11.25 13.25V4.75C11.25 4.19772 10.8023 3.75 10.25 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 3.75H7.75C7.19772 3.75 6.75 4.19772 6.75 4.75V13.25C6.75 13.8023 7.19772 14.25 7.75 14.25H10.25C10.8023 14.25 11.25 13.8023 11.25 13.25V4.75C11.25 4.19772 10.8023 3.75 10.25 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
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
          d="M15.25 1.75V16.25"
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

export default Align2DistributeHorizontal;

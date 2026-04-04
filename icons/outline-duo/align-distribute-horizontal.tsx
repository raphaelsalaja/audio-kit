import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignDistributeHorizontal({
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
          d="M8.25 14.25H9.75C10.3023 14.25 10.75 13.8023 10.75 13.25L10.75 4.75C10.75 4.19771 10.3023 3.75 9.75 3.75H8.25C7.69772 3.75 7.25 4.19771 7.25 4.75L7.25 13.25C7.25 13.8023 7.69772 14.25 8.25 14.25Z"
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
          d="M15.25 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 14.25H9.75C10.3023 14.25 10.75 13.8023 10.75 13.25L10.75 4.75C10.75 4.19771 10.3023 3.75 9.75 3.75H8.25C7.69772 3.75 7.25 4.19771 7.25 4.75L7.25 13.25C7.25 13.8023 7.69772 14.25 8.25 14.25Z"
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

export default AlignDistributeHorizontal;

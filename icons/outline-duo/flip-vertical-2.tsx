import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipVertical2({
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
          d="M3.75 7.25V2.543C3.75 2.267 3.974 2.043 4.25 2.043C4.325 2.043 4.399 2.06 4.466 2.092L14.256 6.774C14.496 6.889 14.414 7.25 14.148 7.25H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 7.25V2.543C3.75 2.267 3.974 2.043 4.25 2.043C4.325 2.043 4.399 2.06 4.466 2.092L14.256 6.774C14.496 6.889 14.414 7.25 14.148 7.25H3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 10.75V15.457C3.75 15.733 3.974 15.957 4.25 15.957C4.325 15.957 4.399 15.94 4.466 15.908L14.256 11.226C14.496 11.111 14.414 10.75 14.148 10.75H3.75Z"
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

export default FlipVertical2;

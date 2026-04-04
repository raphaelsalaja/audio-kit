import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowCenter({
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
          d="m14.25,3.25H3.75c-1.1046,0-2,.8954-2,2v7.5c0,1.1046.8954,2,2,2h10.5c1.1046,0,2-.8954,2-2v-7.5c0-1.1046-.8954-2-2-2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.25,3.25H3.75c-1.1046,0-2,.8954-2,2v7.5c0,1.1046.8954,2,2,2h10.5c1.1046,0,2-.8954,2-2v-7.5c0-1.1046-.8954-2-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.25,7.75h-2.5v2.5h2.5v-2.5Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default WindowCenter;

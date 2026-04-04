import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies5({
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
        <rect
          height="8.5"
          width="8.5"
          fill={secondaryfill}
          opacity=".3"
          rx="2"
          ry="2"
          strokeWidth="0"
          x="7.75"
          y="7.75"
        />
        <rect
          height="8.5"
          width="8.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="7.75"
          y="7.75"
        />
        <path
          d="m7.75,13.25h-1c-1.1046,0-2-.8954-2-2v-4.5c0-1.1046.8954-2,2-2h4.5c1.1046,0,2,.8954,2,2v1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.75,10.25h-1c-1.1046,0-2-.8954-2-2V3.75c0-1.1046.8954-2,2-2h4.5c1.1046,0,2,.8954,2,2v1"
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

export default Copies5;

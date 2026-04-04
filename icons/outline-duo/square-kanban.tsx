import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareKanban({
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
          d="m4.75,15.25h8.5c1.1046,0,2-.8954,2-2V4.75c0-1.1046-.8954-2-2-2H4.75c-1.1046,0-2,.8954-2,2v8.5c0,1.1046.8954,2,2,2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.75,15.25h8.5c1.1046,0,2-.8954,2-2V4.75c0-1.1046-.8954-2-2-2H4.75c-1.1046,0-2,.8954-2,2v8.5c0,1.1046.8954,2,2,2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="6.5"
          width="1.75"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="5.75"
          y="5.75"
        />
        <rect
          height="2.5"
          width="1.75"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.5"
          y="5.75"
        />
      </g>
    </svg>
  );
}

export default SquareKanban;

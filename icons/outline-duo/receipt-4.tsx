import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Receipt4({
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
          d="m10.75,6.75c-.5523,0-1-.4478-1-1V1.75h-4.5c-1.105,0-2,.895-2,2v12.5l3-1.75,2.75,1.75,2.75-1.75,3,1.75V6.75h-4Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.25,1.75h3.9216c.5304,0,1.0391.2107,1.4142.5858l3.5784,3.5784c.3751.3751.5858.8838.5858,1.4142v8.9216s-3-1.75-3-1.75l-2.75,1.75-2.75-1.75-3,1.75V3.75c0-1.1046.8954-2,2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.66,6.75h-3.91c-.552,0-1-.448-1-1V1.852"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="7.5"
          y1="7.75"
          y2="7.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="11.75"
          y1="10.75"
          y2="10.75"
        />
      </g>
    </svg>
  );
}

export default Receipt4;

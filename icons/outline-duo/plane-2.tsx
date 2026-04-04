import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plane2({
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
          d="m15.4283,2.5716h0c-.7966-.7966-2.0985-.7616-2.8512.0765l-6.8271,7.6019h-2.5l-2,2.5h4v4l2.5-2v-2.5l7.6018-6.8271c.8382-.7527.8731-2.0546.0765-2.8512Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.4283,2.5716h0c-.7966-.7966-2.0985-.7616-2.8512.0765l-6.8271,7.6019h-2.5l-2,2.5h4v4l2.5-2v-2.5l7.6018-6.8271c.8382-.7527.8731-2.0546.0765-2.8512Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="10.485 4.9777 2.5 4 1.5 5.25 7.747 8.0264"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="13.0223 7.515 14 15.5 12.75 16.5 9.9736 10.253"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Plane2;

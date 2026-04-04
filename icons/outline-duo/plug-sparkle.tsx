import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugSparkle({
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
          d="m5.6958,7.5609l4.7433,4.7433c.4427.4427.4427,1.1614,0,1.6041l-.3176.3176c-1.7525,1.7525-4.595,1.7525-6.3474,0h0c-1.7525-1.7525-1.7525-4.595,0-6.3474l.3176-.3176c.4427-.4427,1.1614-.4427,1.6041,0Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m1.75,16.25l2.0233-2.0233"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.6958,7.5609l4.7433,4.7433c.4427.4427.4427,1.1614,0,1.6041l-.3176.3176c-1.7525,1.7525-4.595,1.7525-6.3474,0h0c-1.7525-1.7525-1.7525-4.595,0-6.3474l.3176-.3176c.4427-.4427,1.1614-.4427,1.6041,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill={fill}
          points="14.9167 5.25 12.25 5.25 14.5 1.75 13.5833 4.75 16.25 4.75 14 8.25 14.9167 5.25"
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
          x1="6.6494"
          x2="8.4139"
          y1="8.5145"
          y2="6.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9.4855"
          x2="11.25"
          y1="11.3506"
          y2="9.5861"
        />
      </g>
    </svg>
  );
}

export default PlugSparkle;

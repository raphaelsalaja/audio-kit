import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CopyId({
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
          d="m5.25,12.75h-1c-1.1046,0-2-.8954-2-2v-6.5c0-1.1046.8954-2,2-2h6.5c1.1046,0,2,.8954,2,2v1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.75,5.25h-6.5c-1.1046,0-2,.8954-2,2v6.5c0,1.1046.8954,2,2,2h6.5c1.1046,0,2-.8954,2-2v-6.5c0-1.1046-.8954-2-2-2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.75,5.25h-6.5c-1.1046,0-2,.8954-2,2v6.5c0,1.1046.8954,2,2,2h6.5c1.1046,0,2-.8954,2-2v-6.5c0-1.1046-.8954-2-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.7513,8.75h1.0549c.7966,0,1.4434.6468,1.4434,1.4434v1.1132c0,.7966-.6468,1.4434-1.4434,1.4434h-1.0549v-4h0Z"
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
          x1="8.25"
          x2="8.25"
          y1="8.75"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default CopyId;

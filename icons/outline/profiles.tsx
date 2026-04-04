import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Profiles({
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
          d="m5.75,12.25h-1.5c-1.1046,0-2-.8954-2-2v-6c0-1.1046.8954-2,2-2h6c1.1046,0,2,.8954,2,2v1.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.75,5.75h-6c-1.1046,0-2,.8954-2,2v6c0,1.1046.8954,2,2,2h6c1.1046,0,2-.8954,2-2v-6c0-1.1046-.8954-2-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13,11c.552,0,1-.4477,1-1s-.448-1-1-1-1,.4477-1,1,.448,1,1,1Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.5,11c.552,0,1-.4477,1-1s-.448-1-1-1-1,.4477-1,1,.448,1,1,1Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.6195,11.8237c.7156.1717,1.4592.1786,2.2344-.0001.3429-.079.6631.1762.6431.5275-.0524.919-.8151,1.6489-1.7471,1.6489-.9221,0-1.6783-.7142-1.7452-1.6193-.0252-.341.2823-.6367.6148-.5569Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Profiles;

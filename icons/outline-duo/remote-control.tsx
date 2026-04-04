import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RemoteControl({
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
          d="m5.818,6.098c1.757-1.757,4.607-1.757,6.364,0"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.697,3.977c2.929-2.929,7.678-2.929,10.607,0"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.25,17v-6.25c0-1.1046.8954-2,2-2h5.5c1.1046,0,2,.8954,2,2v6.25H4.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.25,16.25v-5.5c0-1.1046.8954-2,2-2h5.5c1.1046,0,2,.8954,2,2v5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="7.25" cy="12" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10.75" cy="12" fill={fill} r="1" strokeWidth="0" />
        <circle cx="7.25" cy="15.5" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10.75" cy="15.5" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default RemoteControl;

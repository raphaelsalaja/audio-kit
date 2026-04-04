import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RemoteControl2({
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
          height="16"
          width="10"
          fill={secondaryfill}
          opacity=".4"
          rx="2.75"
          ry="2.75"
          strokeWidth="0"
          x="4"
          y="1"
        />
        <circle cx="9" cy="5.5" fill={fill} r="2" strokeWidth="0" />
        <circle cx="7.5" cy="10" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10.5" cy="10" fill={fill} r="1" strokeWidth="0" />
        <circle cx="7.5" cy="13" fill={fill} r="1" strokeWidth="0" />
        <circle cx="10.5" cy="13" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default RemoteControl2;

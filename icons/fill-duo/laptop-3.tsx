import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop3({
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
          d="m15,8H3l-1.7627,4.5127c-.3584.8975-.249,1.9106.292,2.7104.542.7993,1.4424,1.2769,2.4082,1.2769h10.125c.9658,0,1.8662-.4775,2.4082-1.2769.541-.7998.6504-1.813.292-2.7104l-1.7627-4.5127Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m12.75,1h-7.5c-1.2426,0-2.25,1.0074-2.25,2.25v4.75h12V3.25c0-1.2426-1.0074-2.25-2.25-2.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="4.75" cy="13.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="7.5833" cy="13.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="10.4167" cy="13.25" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.1667" cy="10.75" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="9" cy="10.75" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="11.8333" cy="10.75" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="13.25" cy="13.25" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Laptop3;

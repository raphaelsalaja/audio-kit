import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles5({
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
        <circle cx="9" cy="9" fill={fill} r="5" />
        <circle cx="3.25" cy="3.25" fill={secondaryfill} r="1.25" />
        <circle cx="14.75" cy="3.25" fill={secondaryfill} r="1.25" />
        <circle cx="3.25" cy="14.75" fill={secondaryfill} r="1.25" />
        <circle cx="14.75" cy="14.75" fill={secondaryfill} r="1.25" />
      </g>
    </svg>
  );
}

export default Circles5;

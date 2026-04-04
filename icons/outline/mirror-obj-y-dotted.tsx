import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjYDotted({
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
          d="M2.75,6.25v-1.5c0-1.105,.895-2,2-2H13.25c1.105,0,2,.895,2,2v1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75,11.75v1.5c0,1.105,.895,2,2,2H13.25c1.105,0,2-.895,2-2v-1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="15.25" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="12.125" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="5.875" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="2.75" cy="9" fill={secondaryfill} r=".75" stroke="none" />
      </g>
    </svg>
  );
}

export default MirrorObjYDotted;

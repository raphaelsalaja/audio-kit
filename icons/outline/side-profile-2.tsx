import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfile2({
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
          d="M2.25,16.25v-2.5h1.639c1.049,0,1.919-.81,1.995-1.856l.112-1.543,1.504-.601-1.5-2c0-2.796-1.912-5.145-4.5-5.811"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75,16.25v-2.5h-1.639c-1.049,0-1.919-.81-1.995-1.856l-.112-1.543-1.504-.601,1.5-2c0-2.796,1.912-5.145,4.5-5.811"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="3.25" cy="7.25" fill={fill} r=".75" stroke="none" />
        <circle
          cx="14.75"
          cy="7.25"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SideProfile2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDashboard2({
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
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".25"
          ry=".25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.25"
          y="7.75"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".25"
          ry=".25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="7.75"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".25"
          ry=".25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="6.25"
          y="11.75"
        />
        <rect
          height="1.5"
          width="1.5"
          fill={secondaryfill}
          rx=".25"
          ry=".25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="11.75"
        />
        <path
          d="m3.145,5.95l5.25-3.99c.358-.272.853-.272,1.21,0l5.25,3.99c.249.189.395.484.395.796v7.504c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-7.504c0-.313.146-.607.395-.796Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HouseDashboard2;

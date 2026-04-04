import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerXDotted({
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
          d="m15.25,2h-1c-1.517,0-2.75,1.233-2.75,2.75v8.5c0,1.517,1.233,2.75,2.75,2.75h1c.414,0,.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3.75,2h-1c-.414,0-.75.336-.75.75v12.5c0,.414.336.75.75.75h1c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="15.25"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="9"
          cy="12.125"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" strokeWidth="0" />
        <circle
          cx="9"
          cy="5.875"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="9" cy="2.75" fill={secondaryfill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default DividerXDotted;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FloppyDisk({
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
          d="M10.75,2.25v3c0,.552-.448,1-1,1h-3.5c-.552,0-1-.448-1-1V2.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25,15.75v-5c0-.552,.448-1,1-1h5.5c.552,0,1,.448,1,1v5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.59,15.75H4.41c-1.193,0-2.16-.967-2.16-2.16V4.41c0-1.193,.967-2.16,2.16-2.16h7.426c.265,0,.52,.105,.707,.293l2.914,2.914c.188,.188,.293,.442,.293,.707v7.426c0,1.193-.967,2.16-2.16,2.16Z"
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

export default FloppyDisk;

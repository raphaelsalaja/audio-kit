import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileZip({
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
          d="M2.75,14.25V3.75c0-1.105,.895-2,2-2h5.586c.265,0,.52,.105,.707,.293l3.914,3.914c.188,.188,.293,.442,.293,.707v7.586c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16,6.25h-3.41c-.552,0-1-.448-1-1V1.852"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7,9.75h0c.69,0,1.25,.56,1.25,1.25v2.25h-2.5v-2.25c0-.69,.56-1.25,1.25-1.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="1.5"
          width="2"
          fill={secondaryfill}
          stroke="none"
          x="5"
          y="2.5"
        />
        <rect
          height="1.5"
          width="2"
          fill={secondaryfill}
          stroke="none"
          x="7"
          y="4"
        />
        <rect
          height="1.5"
          width="2"
          fill={secondaryfill}
          stroke="none"
          x="5"
          y="5.5"
        />
        <rect
          height="1.5"
          width="2"
          fill={secondaryfill}
          stroke="none"
          x="7"
          y="7"
        />
      </g>
    </svg>
  );
}

export default FileZip;

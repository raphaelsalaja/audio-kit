import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRightToLine({
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
          d="M7.543,13.426l5.555-4.021c.276-.2,.276-.61,0-.81L7.543,4.574c-.331-.239-.793-.003-.793,.405v2.271H2.75c-.552,0-1,.448-1,1v1.5c0,.552,.448,1,1,1H6.75v2.271c0,.408,.463,.644,.793,.405Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.25"
          x2="16.25"
          y1="14.25"
          y2="3.75"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldRightToLine;

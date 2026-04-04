import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownToLine({
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
          d="M4.574,7.543l4.021,5.555c.2,.276,.61,.276,.81,0l4.021-5.555c.239-.331,.003-.793-.405-.793h-2.271V2.75c0-.552-.448-1-1-1h-1.5c-.552,0-1,.448-1,1V6.75h-2.271c-.408,0-.644,.463-.405,.793Z"
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
          x1="3.75"
          x2="14.25"
          y1="16.25"
          y2="16.25"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDownToLine;

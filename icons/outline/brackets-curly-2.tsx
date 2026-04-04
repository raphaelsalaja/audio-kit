import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BracketsCurly2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m7.75,10.75c1.105,0,2-.895,2-2v-1.25c0-.828.672-1.5,1.5-1.5-.828,0-1.5-.672-1.5-1.5v-1.25c0-1.105-.895-2-2-2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m4.25,10.75c-1.105,0-2-.895-2-2v-1.25c0-.828-.672-1.5-1.5-1.5.828,0,1.5-.672,1.5-1.5v-1.25c0-1.105.895-2,2-2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default BracketsCurly2;

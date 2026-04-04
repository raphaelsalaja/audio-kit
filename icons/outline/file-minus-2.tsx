import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileMinus2({
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
          d="m6.75,4.25h3.5c0-.321-.127-.627-.353-.853l-2.295-2.295c-.226-.226-.532-.353-.851-.353v3.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m6.236,11.25h2.014c1.105,0,2-.895,2-2v-5.001c0-.32-.127-.626-.353-.852l-2.294-2.294c-.226-.226-.532-.353-.852-.353h-3.001c-1.105,0-2,.895-2,2v4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <polyline
          fill="none"
          points="6.75 .75 6.75 4.25 10.25 4.25"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="4.75"
          x2=".75"
          y1="9.25"
          y2="9.25"
        />
      </g>
    </svg>
  );
}

export default FileMinus2;

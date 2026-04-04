import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sofa({
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
          d="M2.75,6.75v-2c0-1.105,.895-2,2-2H13.25c1.105,0,2,.895,2,2v2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,13.25h5.75c1.105,0,2-.895,2-2v-3c0-.828-.672-1.5-1.5-1.5h0c-.828,0-1.5,.672-1.5,1.5v2s-4.75,0-4.75,0H4.25v-2c0-.828-.672-1.5-1.5-1.5h0c-.828,0-1.5,.672-1.5,1.5v3c0,1.105,.895,2,2,2h5.75Z"
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
          x1="9"
          x2="9"
          y1="2.75"
          y2="10.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.25"
          x2="3.25"
          y1="13.25"
          y2="15.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.75"
          x2="14.75"
          y1="13.25"
          y2="15.25"
        />
      </g>
    </svg>
  );
}

export default Sofa;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Lectern({
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
          d="m4.6466,5.25h8.7068c.3935,0,.7504.2308.9119.5896l1.35,3c.2978.6617-.1863,1.4104-.9119,1.4104H3.2966c-.7257,0-1.2097-.7486-.9119-1.4104l1.35-3c.1615-.3589.5184-.5896.9119-.5896Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m4.6466,5.25h8.7068c.3935,0,.7504.2308.9119.5896l1.35,3c.2978.6617-.1863,1.4104-.9119,1.4104H3.2966c-.7257,0-1.2097-.7486-.9119-1.4104l1.35-3c.1615-.3589.5184-.5896.9119-.5896Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="12.25"
          y1="15.75"
          y2="15.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="15.75"
          y2="10.25"
        />
        <polyline
          fill="none"
          points="5.25 5.25 5.25 2.5 7.25 1.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Lectern;

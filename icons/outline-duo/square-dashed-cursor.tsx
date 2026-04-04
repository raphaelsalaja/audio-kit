import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedCursor({
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
          d="m2.75,6.25v-1.5c0-1.105.895-2,2-2h2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.25,2.75h2c1.105,0,2,.895,2,2v1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.75,15.25h-2c-1.105,0-2-.895-2-2v-1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.184,8.77l6.854,2.504c.289.106.28.517-.012.611l-3.137,1.004-1.004,3.137c-.094.293-.505.301-.611.012l-2.504-6.854c-.094-.258.156-.508.414-.414Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9.184,8.77l6.854,2.504c.289.106.28.517-.012.611l-3.137,1.004-1.004,3.137c-.094.293-.505.301-.611.012l-2.504-6.854c-.094-.258.156-.508.414-.414Z"
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

export default SquareDashedCursor;

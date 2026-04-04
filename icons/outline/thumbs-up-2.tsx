import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThumbsUp2({
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
          d="m7,4.75l.638-2.031c.225-.716-.114-1.488-.794-1.807l-.345-.162-2.802,3.449c-.29.357-.448.802-.448,1.261v3.79c0,1.105.895,2,2,2h3.229c.878,0,1.653-.573,1.912-1.412l.769-2.5c.396-1.286-.566-2.588-1.912-2.588h-2.249Z"
          fill="none"
          stroke={fill}
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
          x1=".75"
          x2=".75"
          y1="10.75"
          y2="5.25"
        />
      </g>
    </svg>
  );
}

export default ThumbsUp2;

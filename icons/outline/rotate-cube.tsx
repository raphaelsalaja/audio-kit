import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RotateCube({
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
          d="m8.398,4.999l-2.55,1.479c-.37.215-.598.61-.598,1.038v2.968c0,.428.228.823.598,1.038l2.55,1.479c.372.216.832.216,1.204,0l2.55-1.479c.37-.215.598-.61.598-1.038v-2.968c0-.428-.228-.823-.598-1.038l-2.55-1.479c-.372-.216-.832-.216-1.204,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.7527,3.2549l.5353,2.9951h.002C3.373,3.61,5.969,1.75,9,1.75c3.9366,0,7.1405,3.1377,7.2473,7.0485"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.2473,14.7451l-.5353-2.9951h-.002c-1.083,2.64-3.679,4.5-6.71,4.5-3.9366,0-7.1405-3.1377-7.2473-7.0485"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="12.59 6.918 9 9 5.41 6.918"
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
          x1="9"
          x2="9"
          y1="13.163"
          y2="9"
        />
      </g>
    </svg>
  );
}

export default RotateCube;

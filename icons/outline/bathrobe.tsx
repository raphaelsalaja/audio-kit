import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bathrobe({
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
          d="M12,1.75c-.153,.761-.526,2.094-1.531,3.438-.771,1.031-1.626,1.682-2.219,2.062v9"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6,1.75c.153,.761,.526,2.094,1.531,3.437,.485,.648,1.003,1.147,1.469,1.522"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.375,10.25l.875-.25-.621-5.592c-.08-.716-.538-1.334-1.2-1.617l-2.429-1.041h-3s-3,0-3,0l-2.429,1.041c-.662,.284-1.12,.902-1.2,1.617l-.621,5.592,.875,.25"
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
          x1="4.75"
          x2="13.25"
          y1="10.25"
          y2="10.25"
        />
        <polyline
          fill="none"
          points="13.25 5.75 13.25 16.25 4.75 16.25 4.75 5.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Bathrobe;

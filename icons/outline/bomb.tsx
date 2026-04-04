import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bomb({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.341"
          x2="14"
          y1="5.659"
          y2="4"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.75"
          x2="16.5"
          y1="2.25"
          y2="1.5"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.25"
          x2="12.25"
          y1="1.75"
          y2=".75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.25"
          x2="17.25"
          y1="5.75"
          y2="5.75"
        />
        <path
          d="M13.5,7.157c-.256-.435-.643-.993-1.212-1.551-.519-.509-1.033-.864-1.445-1.106l-1.333,1.333c-.759-.37-1.609-.583-2.51-.583-3.176,0-5.75,2.574-5.75,5.75s2.574,5.75,5.75,5.75,5.75-2.574,5.75-5.75c0-.901-.213-1.751-.583-2.51,.534-.533,.799-.799,1.333-1.333Z"
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

export default Bomb;

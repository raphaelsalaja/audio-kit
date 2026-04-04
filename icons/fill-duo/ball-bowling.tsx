import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallBowling({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 8C6.052 8 6.5 7.5523 6.5 7C6.5 6.4477 6.052 6 5.5 6C4.948 6 4.5 6.4477 4.5 7C4.5 7.5523 4.948 8 5.5 8Z"
          fill={fill}
        />
        <path
          d="M8.5 6C9.052 6 9.5 5.5523 9.5 5C9.5 4.4477 9.052 4 8.5 4C7.948 4 7.5 4.4477 7.5 5C7.5 5.5523 7.948 6 8.5 6Z"
          fill={fill}
        />
        <path
          d="M8.5 10C9.052 10 9.5 9.5523 9.5 9C9.5 8.4477 9.052 8 8.5 8C7.948 8 7.5 8.4477 7.5 9C7.5 9.5523 7.948 10 8.5 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallBowling;

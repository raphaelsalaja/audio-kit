import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EqualLessThan({
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
          d="M3 15.75C3 15.3358 3.33579 15 3.75 15H14.25C14.6642 15 15 15.3358 15 15.75C15 16.1642 14.6642 16.5 14.25 16.5H3.75C3.33579 16.5 3 16.1642 3 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.664 1.90137C14.8566 2.26812 14.7154 2.72151 14.3486 2.91405L5.61348 7.5L14.3486 12.086C14.7154 12.2785 14.8566 12.7319 14.664 13.0986C14.4715 13.4654 14.0181 13.6066 13.6514 13.414L3.65137 8.16405C3.40458 8.03448 3.25 7.77874 3.25 7.5C3.25 7.22126 3.40458 6.96552 3.65137 6.83595L13.6514 1.58595C14.0181 1.39341 14.4715 1.53463 14.664 1.90137Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EqualLessThan;

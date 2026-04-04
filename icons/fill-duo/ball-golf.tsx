import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallGolf({
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
          d="M3 7C3 3.68624 5.68683 1 9 1C12.3132 1 15 3.68624 15 7C15 10.3138 12.3132 13 9 13C5.68683 13 3 10.3138 3 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.75 14C6.33579 14 6 14.3358 6 14.75C6 15.1642 6.33579 15.5 6.75 15.5H8.25V17C8.25 17.4142 8.58579 17.75 9 17.75C9.41421 17.75 9.75 17.4142 9.75 17V15.5H11.25C11.6642 15.5 12 15.1642 12 14.75C12 14.3358 11.6642 14 11.25 14H6.75Z"
          fill={fill}
        />
        <path
          d="M9 5C9.552 5 10 4.55227 10 4C10 3.44773 9.552 3 9 3C8.448 3 8 3.44773 8 4C8 4.55227 8.448 5 9 5Z"
          fill={fill}
        />
        <path
          d="M7 8C7.552 8 8 7.55227 8 7C8 6.44773 7.552 6 7 6C6.448 6 6 6.44773 6 7C6 7.55227 6.448 8 7 8Z"
          fill={fill}
        />
        <path
          d="M11 8C11.552 8 12 7.55227 12 7C12 6.44773 11.552 6 11 6C10.448 6 10 6.44773 10 7C10 7.55227 10.448 8 11 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallGolf;

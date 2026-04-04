import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowMinus({
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
          d="M3.75 2C2.22957 2 1 3.23701 1 4.75V13.25C1 14.763 2.22957 16 3.75 16H14.25C15.7704 16 17 14.763 17 13.25V4.75C17 3.23701 15.7704 2 14.25 2H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.75 9.75C5.75 9.33579 6.08579 9 6.5 9H11.5C11.9142 9 12.25 9.33579 12.25 9.75C12.25 10.1642 11.9142 10.5 11.5 10.5H6.5C6.08579 10.5 5.75 10.1642 5.75 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 5.5C4.1642 5.5 4.5 5.16 4.5 4.75C4.5 4.34 4.1642 4 3.75 4C3.3358 4 3 4.34 3 4.75C3 5.16 3.3358 5.5 3.75 5.5Z"
          fill={fill}
        />
        <path
          d="M6.25 5.5C6.6642 5.5 7 5.16 7 4.75C7 4.34 6.6642 4 6.25 4C5.8358 4 5.5 4.34 5.5 4.75C5.5 5.16 5.8358 5.5 6.25 5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowMinus;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notes({
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
          d="M1 6.75C1 5.23069 2.23128 4 3.75 4H14.25C15.7687 4 17 5.23069 17 6.75V13.75C17 15.2693 15.7687 16.5 14.25 16.5H3.75C2.23128 16.5 1 15.2693 1 13.75V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 11.75C4.25 11.3358 4.58579 11 5 11H9.25C9.66421 11 10 11.3358 10 11.75C10 12.1642 9.66421 12.5 9.25 12.5H5C4.58579 12.5 4.25 12.1642 4.25 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 8.75C4.25 8.33579 4.58579 8 5 8H13C13.4142 8 13.75 8.33579 13.75 8.75C13.75 9.16421 13.4142 9.5 13 9.5H5C4.58579 9.5 4.25 9.16421 4.25 8.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 1.75C3 1.33579 3.33579 1 3.75 1H14.25C14.6642 1 15 1.33579 15 1.75C15 2.16421 14.6642 2.5 14.25 2.5H3.75C3.33579 2.5 3 2.16421 3 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Notes;

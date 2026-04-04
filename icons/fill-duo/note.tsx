import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Note({
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
          d="M1 4.75C1 3.23069 2.23128 2 3.75 2H14.25C15.7687 2 17 3.23069 17 4.75V13.25C17 14.7693 15.7687 16 14.25 16H3.75C2.23128 16 1 14.7693 1 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 6.25C4.25 5.83579 4.58579 5.5 5 5.5H13C13.4142 5.5 13.75 5.83579 13.75 6.25C13.75 6.66421 13.4142 7 13 7H5C4.58579 7 4.25 6.66421 4.25 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 11.75C4.25 11.3358 4.58579 11 5 11H9.25C9.66421 11 10 11.3358 10 11.75C10 12.1642 9.66421 12.5 9.25 12.5H5C4.58579 12.5 4.25 12.1642 4.25 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 9C4.25 8.58579 4.58579 8.25 5 8.25H13C13.4142 8.25 13.75 8.58579 13.75 9C13.75 9.41421 13.4142 9.75 13 9.75H5C4.58579 9.75 4.25 9.41421 4.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Note;

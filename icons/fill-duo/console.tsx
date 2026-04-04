import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Console({
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
          d="M4.75 2C3.23128 2 2 3.23069 2 4.75V13.25C2 14.7693 3.23128 16 4.75 16H13.25C14.7687 16 16 14.7693 16 13.25V4.75C16 3.23069 14.7687 2 13.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10.25 9C10.25 8.58579 10.5858 8.25 11 8.25H12.5C12.9142 8.25 13.25 8.58579 13.25 9C13.25 9.41421 12.9142 9.75 12.5 9.75H11C10.5858 9.75 10.25 9.41421 10.25 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 6.25C9 5.83579 9.33579 5.5 9.75 5.5H12.5C12.9142 5.5 13.25 5.83579 13.25 6.25C13.25 6.66421 12.9142 7 12.5 7H9.75C9.33579 7 9 6.66421 9 6.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 11.75C9 11.3358 9.33579 11 9.75 11H12.5C12.9142 11 13.25 11.3358 13.25 11.75C13.25 12.1642 12.9142 12.5 12.5 12.5H9.75C9.33579 12.5 9 12.1642 9 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.96967 5.71967C5.26256 5.42678 5.73744 5.42678 6.03033 5.71967L8.78033 8.46967C9.07322 8.76256 9.07322 9.23744 8.78033 9.53033L6.03033 12.2803C5.73744 12.5732 5.26256 12.5732 4.96967 12.2803C4.67678 11.9874 4.67678 11.5126 4.96967 11.2197L7.18934 9L4.96967 6.78033C4.67678 6.48744 4.67678 6.01256 4.96967 5.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Console;

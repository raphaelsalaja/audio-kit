import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary4({
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
          d="M11 12.75C11 11.7838 11.7838 11 12.75 11H14.75C15.7162 11 16.5 11.7838 16.5 12.75V14.75C16.5 15.7162 15.7162 16.5 14.75 16.5H12.75C11.7838 16.5 11 15.7162 11 14.75V12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.25C1.5 2.73079 2.73079 1.5 4.25 1.5C5.76921 1.5 7 2.73079 7 4.25C7 5.76921 5.76921 7 4.25 7C2.73079 7 1.5 5.76921 1.5 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.96967 6.96967C7.26256 6.67678 7.73744 6.67678 8.03033 6.96967L10.7803 9.71967C11.0732 10.0126 11.0732 10.4874 10.7803 10.7803C10.4874 11.0732 10.0126 11.0732 9.71967 10.7803L6.96967 8.03033C6.67678 7.73744 6.67678 7.26256 6.96967 6.96967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Itinerary4;

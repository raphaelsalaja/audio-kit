import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScooterFront({
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
          d="M4 7.75C4 6.23079 5.23079 5 6.75 5H11.25C12.7692 5 14 6.23079 14 7.75V12.25C14 13.7692 12.7692 15 11.25 15H6.75C5.23079 15 4 13.7692 4 12.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.25 4H6.35348C6.67985 5.15422 7.74079 6 9 6C10.2592 6 11.3202 5.15422 11.6465 4H13.75C14.1642 4 14.5 3.66421 14.5 3.25C14.5 2.83579 14.1642 2.5 13.75 2.5H11.6465C11.3202 1.34578 10.2592 0.5 9 0.5C7.74079 0.5 6.67985 1.34578 6.35348 2.5H4.25C3.83579 2.5 3.5 2.83579 3.5 3.25C3.5 3.66421 3.83579 4 4.25 4ZM9 2C8.30931 2 7.75 2.55952 7.75 3.25C7.75 3.94048 8.30931 4.5 9 4.5C9.69069 4.5 10.25 3.94048 10.25 3.25C10.25 2.55952 9.69069 2 9 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.5 11.5C7.5 10.6716 8.17159 10 9 10C9.82841 10 10.5 10.6716 10.5 11.5V16C10.5 16.8284 9.82841 17.5 9 17.5C8.17159 17.5 7.5 16.8284 7.5 16V11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ScooterFront;

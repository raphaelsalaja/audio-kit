import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareCommand({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.5 6.5C4.5 5.39579 5.39579 4.5 6.5 4.5C7.60421 4.5 8.5 5.39579 8.5 6.5V7H9.5V6.5C9.5 5.39579 10.3958 4.5 11.5 4.5C12.6042 4.5 13.5 5.39579 13.5 6.5C13.5 7.60421 12.6042 8.5 11.5 8.5H11V9.5H11.5C12.6042 9.5 13.5 10.3958 13.5 11.5C13.5 12.6042 12.6042 13.5 11.5 13.5C10.3958 13.5 9.5 12.6042 9.5 11.5V11H8.5V11.5C8.5 12.6042 7.60421 13.5 6.5 13.5C5.39579 13.5 4.5 12.6042 4.5 11.5C4.5 10.3958 5.39579 9.5 6.5 9.5H7V8.5H6.5C5.39579 8.5 4.5 7.60421 4.5 6.5ZM6.5 6C6.22421 6 6 6.22421 6 6.5C6 6.77579 6.22421 7 6.5 7H7V6.5C7 6.22421 6.77579 6 6.5 6ZM8.5 8.5V9.5H9.5V8.5H8.5ZM11 6.5C11 6.22421 11.2242 6 11.5 6C11.7758 6 12 6.22421 12 6.5C12 6.77579 11.7758 7 11.5 7H11V6.5ZM11 11V11.5C11 11.7758 11.2242 12 11.5 12C11.7758 12 12 11.7758 12 11.5C12 11.2242 11.7758 11 11.5 11H11ZM6 11.5C6 11.2242 6.22421 11 6.5 11H7V11.5C7 11.7758 6.77579 12 6.5 12C6.22421 12 6 11.7758 6 11.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareCommand;

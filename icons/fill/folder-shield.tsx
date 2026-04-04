import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderShield({
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
          d="M17.06 11.317L14.31 10.067C14.113 9.97701 13.886 9.97701 13.689 10.067L10.939 11.317C10.671 11.438 10.5 11.706 10.5 12V14.94C10.5 16.99 13.46 17.878 13.798 17.972C13.864 17.991 13.932 17.999 14 17.999C14.068 17.999 14.136 17.99 14.202 17.972C14.539 17.877 17.5 16.99 17.5 14.94V12C17.5 11.706 17.327 11.438 17.06 11.317ZM15.999 14.94C15.999 15.548 14.872 16.175 13.999 16.465V11.573L15.999 12.482V14.94Z"
          fill={secondaryfill}
        />
        <path
          d="M9.15872 16C9.05826 15.6767 9 15.3238 9 14.94V12C9 11.1244 9.50893 10.3179 10.3196 9.95088L13.0657 8.70265C13.6576 8.4328 14.3398 8.43205 14.9317 8.70192L16.5 9.41478V6.24902C16.5 4.73302 15.267 3.49902 13.75 3.49902H8.724L8.346 3.02802C7.821 2.37402 7.039 1.99902 6.201 1.99902H4.25C2.733 1.99902 1.5 3.23302 1.5 4.74902V13.25C1.5 14.767 2.733 16 4.25 16H9.15872ZM3 4.75002V6.31402C3.377 6.12002 3.798 6.00002 4.25 6.00002H13.75C14.202 6.00002 14.623 6.12002 15 6.31402V6.25002C15 5.56102 14.439 5.00002 13.75 5.00002H8.364C8.136 5.00002 7.921 4.89602 7.779 4.71902L7.176 3.96702C6.938 3.67002 6.582 3.50002 6.201 3.50002H4.25C3.561 3.50002 3 4.06102 3 4.75002Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderShield;

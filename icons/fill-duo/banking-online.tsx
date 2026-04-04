import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BankingOnline({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V12.75C1.5 14.2692 2.73079 15.5 4.25 15.5H13.75C15.2692 15.5 16.5 14.2692 16.5 12.75V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M0 14.75C0 14.3358 0.335786 14 0.75 14H17.25C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5H0.75C0.335786 15.5 0 15.1642 0 14.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 4C9.41421 4 9.75 4.33579 9.75 4.75V5.25H10.8183C11.2325 5.25 11.5683 5.58579 11.5683 6C11.5683 6.41421 11.2325 6.75 10.8183 6.75H8.20457C7.92819 6.75 7.70447 6.97381 7.70447 7.2499C7.70447 7.52634 7.92844 7.7502 8.20457 7.7502H9.79577C10.9001 7.7502 11.7957 8.64537 11.7957 9.75C11.7957 10.8546 10.9003 11.75 9.79577 11.75H9.75V12.25C9.75 12.6642 9.41421 13 9 13C8.58579 13 8.25 12.6642 8.25 12.25V11.75H7.18177C6.76755 11.75 6.43177 11.4142 6.43177 11C6.43177 10.5858 6.76755 10.25 7.18177 10.25H9.79577C10.0718 10.25 10.2957 10.0262 10.2957 9.75C10.2957 9.47403 10.0719 9.2502 9.79577 9.2502H8.20457C7.0997 9.2502 6.20447 8.35446 6.20447 7.2499C6.20447 6.14499 7.10015 5.25 8.20457 5.25H8.25V4.75C8.25 4.33579 8.58579 4 9 4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BankingOnline;

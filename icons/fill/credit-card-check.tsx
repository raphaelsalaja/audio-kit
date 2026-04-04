import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardCheck({
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
          d="M14 9.5C11.7939 9.5 10 11.2944 10 13.5C10 15.7056 11.7939 17.5 14 17.5C16.2061 17.5 18 15.7056 18 13.5C18 11.2944 16.2061 9.5 14 9.5ZM16.3076 12.752L14.0576 15.252C13.9199 15.4048 13.7256 15.4942 13.5195 15.4996C13.5127 15.5001 13.5068 15.5001 13.5 15.5001C13.3018 15.5001 13.1104 15.4215 12.9697 15.2804L11.7197 14.0304C11.4267 13.7374 11.4267 13.2628 11.7197 12.9699C12.0127 12.677 12.4873 12.6769 12.7802 12.9699L13.4716 13.6608L15.1923 11.7482C15.4706 11.4416 15.9433 11.4162 16.2519 11.6925C16.5595 11.9698 16.5849 12.4439 16.3076 12.752Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 3C2.23054 3 1 4.23203 1 5.75V6.5H17V5.75C17 4.23203 15.7695 3 14.25 3H3.75Z"
          fill={fill}
        />
        <path
          d="M14 8H1V12.25C1 13.768 2.23054 15 3.75 15H8.70761C8.57238 14.523 8.5 14.0199 8.5 13.5C8.5 10.4661 10.9654 8 14 8ZM4.25 10.5C3.83579 10.5 3.5 10.8358 3.5 11.25C3.5 11.6642 3.83579 12 4.25 12H7.25C7.66421 12 8 11.6642 8 11.25C8 10.8358 7.66421 10.5 7.25 10.5H4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCardCheck;

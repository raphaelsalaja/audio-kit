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
          d="M1.75 7.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.25H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.25V5.75C16.25 4.646 15.355 3.75 14.25 3.75H3.75C2.645 3.75 1.75 4.646 1.75 5.75V12.25C1.75 13.354 2.645 14.25 3.75 14.25H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9.5C11.7939 9.5 10 11.2944 10 13.5C10 15.7056 11.7939 17.5 14 17.5C16.2061 17.5 18 15.7056 18 13.5C18 11.2944 16.2061 9.5 14 9.5ZM16.3076 12.752L14.0576 15.252C13.9199 15.4048 13.7256 15.4942 13.5195 15.4996C13.5127 15.5001 13.5068 15.5001 13.5 15.5001C13.3018 15.5001 13.1104 15.4215 12.9697 15.2804L11.7197 14.0304C11.4267 13.7374 11.4267 13.2628 11.7197 12.9699C12.0127 12.677 12.4873 12.6769 12.7802 12.9699L13.4716 13.6608L15.1923 11.7482C15.4706 11.4416 15.9433 11.4162 16.2519 11.6925C16.5595 11.9698 16.5849 12.4439 16.3076 12.752Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CreditCardCheck;

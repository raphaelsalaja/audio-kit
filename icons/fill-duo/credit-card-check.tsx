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
          d="M1 5.75C1 4.23079 2.23079 3 3.75 3H14.25C15.7692 3 17 4.23079 17 5.75V8.89123C16.1369 8.32773 15.1063 8 14 8C10.9654 8 8.5 10.4661 8.5 13.5C8.5 14.0199 8.57238 14.523 8.70761 15H3.75C2.23079 15 1 13.7692 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M17 6.5H1V8H17V6.5Z" fill={fill} />
        <path
          d="M3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 11.25C12 10.8358 12.3358 10.5 12.75 10.5H13.75C14.1642 10.5 14.5 10.8358 14.5 11.25C14.5 11.6642 14.1642 12 13.75 12H12.75C12.3358 12 12 11.6642 12 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 9.5C11.7939 9.5 10 11.2944 10 13.5C10 15.7056 11.7939 17.5 14 17.5C16.2061 17.5 18 15.7056 18 13.5C18 11.2944 16.2061 9.5 14 9.5ZM16.3076 12.752L14.0576 15.252C13.9199 15.4048 13.7256 15.4942 13.5195 15.4996C13.5127 15.5001 13.5068 15.5001 13.5 15.5001C13.3018 15.5001 13.1104 15.4215 12.9697 15.2804L11.7197 14.0304C11.4267 13.7374 11.4267 13.2628 11.7197 12.9699C12.0127 12.677 12.4873 12.6769 12.7802 12.9699L13.4716 13.6608L15.1923 11.7482C15.4706 11.4416 15.9433 11.4162 16.2519 11.6925C16.5595 11.9698 16.5849 12.4439 16.3076 12.752Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CreditCardCheck;

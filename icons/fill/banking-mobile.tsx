import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BankingMobile({
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
          d="M6.75 2C6.75 1.58579 7.08579 1.25 7.5 1.25H10.5C10.9142 1.25 11.25 1.58579 11.25 2V2.75C11.25 3.16421 10.9142 3.5 10.5 3.5H7.5C7.08579 3.5 6.75 3.16421 6.75 2.75V2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 3.75C3 2.23119 4.23119 1 5.75 1H12.25C13.7688 1 15 2.23119 15 3.75V14.25C15 15.7688 13.7688 17 12.25 17H5.75C4.23119 17 3 15.7688 3 14.25V3.75ZM5.75 2.5C5.05961 2.5 4.5 3.05961 4.5 3.75V14.25C4.5 14.9404 5.05961 15.5 5.75 15.5H12.25C12.9404 15.5 13.5 14.9404 13.5 14.25V3.75C13.5 3.05961 12.9404 2.5 12.25 2.5H5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.9999 5C9.41411 5 9.7499 5.33579 9.7499 5.75V6.0002H10.75C11.1642 6.0002 11.5 6.33599 11.5 6.7502C11.5 7.16441 11.1642 7.5002 10.75 7.5002H8.3748C8.02971 7.5002 7.75 7.77991 7.75 8.125C7.75 8.47037 8.03 8.7502 8.3748 8.7502H9.6251C10.7986 8.7502 11.7499 9.70149 11.7499 10.875C11.7499 12.0066 10.8654 12.9317 9.7499 12.9963V13.25C9.7499 13.6642 9.41411 14 8.9999 14C8.58569 14 8.2499 13.6642 8.2499 13.25V12.9999H7.2499C6.83569 12.9999 6.4999 12.6641 6.4999 12.2499C6.4999 11.8357 6.83569 11.4999 7.2499 11.4999H9.6251C9.97012 11.4999 10.2499 11.2202 10.2499 10.875C10.2499 10.5299 9.97019 10.2502 9.6251 10.2502H8.3748C7.201 10.2502 6.25 9.29823 6.25 8.125C6.25 6.99341 7.13452 6.06846 8.2499 6.00381V5.75C8.2499 5.33579 8.58569 5 8.9999 5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BankingMobile;

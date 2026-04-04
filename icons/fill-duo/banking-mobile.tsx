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
          d="M5.75 1C4.23119 1 3 2.23119 3 3.75V14.25C3 15.7688 4.23119 17 5.75 17H12.25C13.7688 17 15 15.7688 15 14.25V3.75C15 2.23119 13.7688 1 12.25 1H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.9999 4.49991C9.41411 4.49991 9.7499 4.83569 9.7499 5.24991V5.50011H10.75C11.1642 5.50011 11.5 5.8359 11.5 6.25011C11.5 6.66432 11.1642 7.00011 10.75 7.00011H8.3748C8.02971 7.00011 7.75 7.27982 7.75 7.62491C7.75 7.97028 8.03 8.25011 8.3748 8.25011H9.6251C10.7986 8.25011 11.7499 9.20139 11.7499 10.3749C11.7499 11.5065 10.8654 12.4316 9.7499 12.4962V12.7499C9.7499 13.1641 9.41411 13.4999 8.9999 13.4999C8.58569 13.4999 8.2499 13.1641 8.2499 12.7499V12.4998H7.2499C6.83569 12.4998 6.4999 12.164 6.4999 11.7498C6.4999 11.3356 6.83569 10.9998 7.2499 10.9998H9.6251C9.97012 10.9998 10.2499 10.7201 10.2499 10.3749C10.2499 10.0298 9.97019 9.75011 9.6251 9.75011H8.3748C7.201 9.75011 6.25 8.79814 6.25 7.62491C6.25 6.49332 7.13452 5.56837 8.2499 5.50372V5.24991C8.2499 4.83569 8.58569 4.49991 8.9999 4.49991Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.75 1V1.75C11.75 2.44036 11.1904 3 10.5 3H7.5C6.80964 3 6.25 2.44036 6.25 1.75V1H11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BankingMobile;

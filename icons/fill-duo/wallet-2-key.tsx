import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet2Key({
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
          d="M13.5028 2.07856C13.1582 1.38927 12.4027 1.0061 11.6429 1.13564L5.08061 2.25569C3.01253 2.60925 1.5 4.40138 1.5 6.49997C1.5 6.5286 1.50164 6.55704 1.50485 6.58519C1.59004 5.14276 2.78612 4 4.25 4H13.75C13.9233 4 14.0929 4.01603 14.2574 4.04668C14.2357 3.98275 14.2141 3.91867 14.1925 3.85451C13.9882 3.24883 13.7815 2.63594 13.5028 2.07856Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M0 14.25C0 12.7312 1.23122 11.5 2.75 11.5C4.00878 11.5 5.07003 12.3457 5.39649 13.5H7.25H8.75C9.16421 13.5 9.5 13.8358 9.5 14.25C9.5 14.6642 9.16421 15 8.75 15H8V15.75C8 16.1642 7.66421 16.5 7.25 16.5C6.83579 16.5 6.5 16.1642 6.5 15.75V15H5.39649C5.07003 16.1543 4.00878 17 2.75 17C1.23122 17 0 15.7688 0 14.25ZM2.75 13C3.44036 13 4 13.5596 4 14.25C4 14.9404 3.44036 15.5 2.75 15.5C2.05964 15.5 1.5 14.9404 1.5 14.25C1.5 13.5596 2.05964 13 2.75 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 6.75C1.5 5.23079 2.73079 4 4.25 4H13.75C15.2692 4 16.5 5.23079 16.5 6.75V13.25C16.5 14.7692 15.2692 16 13.75 16H10.1643C10.6741 15.5875 11 14.9568 11 14.25C11 13.0074 9.99264 12 8.75 12H6.35576C5.60526 10.7994 4.27216 10 2.75 10C2.31497 10 1.89521 10.0654 1.5 10.1868V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 11.75H13C12.034 11.75 11.25 10.966 11.25 10C11.25 9.033 12.034 8.25 13 8.25H16C16.552 8.25 17 8.698 17 9.25V10.75C17 11.302 16.552 11.75 16 11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wallet2Key;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardContactless({
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
          d="M3.75 14.25H9.8559C9.9471 14.2029 10.2265 14.0675 10.1765 13.9588C10.0452 13.6733 10 13.3354 10 13C10 11.908 10.778 10.997 11.811 10.793C11.895 10.37 12.101 9.96701 12.429 9.63901C12.756 9.31301 13.158 9.10799 13.579 9.02499C13.663 8.60199 13.868 8.19899 14.196 7.87199C14.754 7.31499 15.532 7.11099 16.25 7.26199V6.75H1.75V12.25C1.75 13.355 2.645 14.25 3.75 14.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 14.25H3.75C2.645 14.25 1.75 13.355 1.75 12.25V4.75C1.75 3.645 2.645 2.75 3.75 2.75H14.25C15.355 2.75 16.25 3.645 16.25 4.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 6.75H16.25"
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
          d="M14.0181 14.768C14.4701 14.316 14.7501 13.691 14.7501 13C14.7501 12.31 14.4701 11.685 14.0181 11.232"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.786 16.536C16.691 15.631 17.25 14.381 17.25 13C17.25 11.619 16.69 10.369 15.786 9.464"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 13.75C12.6642 13.75 13 13.414 13 13C13 12.586 12.6642 12.25 12.25 12.25C11.8358 12.25 11.5 12.586 11.5 13C11.5 13.414 11.8358 13.75 12.25 13.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CreditCardContactless;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileSignal({
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
          d="M13.5 3.75V5.04199C13.108 5.13499 12.735 5.33401 12.429 5.63901C12.101 5.96701 11.895 6.37 11.811 6.793C10.778 6.997 10 7.908 10 9C10 10.092 10.778 11.003 11.811 11.207C11.895 11.629 12.1 12.032 12.427 12.359C12.734 12.666 13.107 12.865 13.5 12.958V14.25C13.5 15.354 12.605 16.25 11.5 16.25H4.75C3.645 16.25 2.75 15.354 2.75 14.25V3.75C2.75 2.646 3.645 1.75 4.75 1.75H11.5C12.605 1.75 13.5 2.646 13.5 3.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.0179 10.768C14.4699 10.316 14.7499 9.691 14.7499 9C14.7499 8.31 14.4699 7.68499 14.0179 7.23199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.786 12.536C16.691 11.631 17.25 10.381 17.25 9C17.25 7.619 16.69 6.36899 15.786 5.46399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.75C12.6642 9.75 13 9.414 13 9C13 8.586 12.6642 8.25 12.25 8.25C11.8358 8.25 11.5 8.586 11.5 9C11.5 9.414 11.8358 9.75 12.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6 13.75H10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4.37701V3.75C13.25 2.646 12.355 1.75 11.25 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H11.25C12.355 16.25 13.25 15.354 13.25 14.25V13.623"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MobileSignal;

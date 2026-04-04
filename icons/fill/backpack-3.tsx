import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack3({
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
          d="M8.25 1.5C7.83581 1.5 7.5 1.83581 7.5 2.25V3.957C7.5 4.37121 7.16421 4.707 6.75 4.707C6.33579 4.707 6 4.37121 6 3.957V2.25C6 1.00739 7.00739 0 8.25 0H9.75C10.9926 0 12 1.00739 12 2.25V3.957C12 4.37121 11.6642 4.707 11.25 4.707C10.8358 4.707 10.5 4.37121 10.5 3.957V2.25C10.5 1.83581 10.1642 1.5 9.75 1.5H8.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11 10.5C11 9.39541 10.1046 8.5 9 8.5C7.89541 8.5 7 9.39541 7 10.5H11Z"
          fill={secondaryfill}
        />
        <path d="M11 12V17H7V12H11Z" fill={secondaryfill} />
        <path
          d="M9 3C5.40979 3 2.5 5.90979 2.5 9.5V14.25C2.5 15.7692 3.73079 17 5.25 17H5.5V10.5C5.5 8.56699 7.06699 7 9 7C10.933 7 12.5 8.56699 12.5 10.5V17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V9.5C15.5 5.90979 12.5902 3 9 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack3;

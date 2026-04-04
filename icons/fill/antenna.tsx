import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Antenna({
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
          d="M5.11093 2.05027C5.40382 2.34316 5.40382 2.81803 5.11093 3.11093C2.96302 5.25883 2.96302 8.74116 5.11093 10.8891C5.40382 11.182 5.40382 11.6568 5.11093 11.9497C4.81804 12.2426 4.34316 12.2426 4.05027 11.9497C1.31658 9.21603 1.31658 4.78396 4.05027 2.05027C4.34316 1.75737 4.81804 1.75737 5.11093 2.05027Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M12.8891 2.05027C13.182 1.75737 13.6568 1.75737 13.9497 2.05027C16.6834 4.78396 16.6834 9.21603 13.9497 11.9497C13.6568 12.2426 13.182 12.2426 12.8891 11.9497C12.5962 11.6568 12.5962 11.182 12.8891 10.8891C15.037 8.74116 15.037 5.25883 12.8891 3.11093C12.5962 2.81803 12.5962 2.34316 12.8891 2.05027Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M6 7C6 5.34319 7.34319 4 9 4C10.6568 4 12 5.34319 12 7C12 8.39784 11.0439 9.57244 9.75 9.90548V14.5H12C12.4142 14.5 12.75 14.8358 12.75 15.25C12.75 15.6642 12.4142 16 12 16H6C5.58579 16 5.25 15.6642 5.25 15.25C5.25 14.8358 5.58579 14.5 6 14.5H8.25V9.90548C6.9561 9.57244 6 8.39784 6 7Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Antenna;

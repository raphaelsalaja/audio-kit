import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseRefresh({
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
          d="M7 2.25C7 2.11221 7.11221 2 7.25 2H10.75C10.8878 2 11 2.11221 11 2.25V4H12.5V2.25C12.5 1.28379 11.7162 0.5 10.75 0.5H7.25C6.28379 0.5 5.5 1.28379 5.5 2.25V4H7V2.25Z"
          fill={fill}
        />
        <path
          d="M18 10.75C18 10.3358 17.6642 10 17.25 10C16.8358 10 16.5 10.3358 16.5 10.75V11.1276C15.9334 10.7322 15.2442 10.5 14.5 10.5C12.5668 10.5 11 12.0668 11 14C11 15.9332 12.5668 17.5 14.5 17.5C15.503 17.5 16.4088 17.0765 17.0455 16.4017C17.3298 16.1004 17.316 15.6257 17.0147 15.3415C16.7134 15.0572 16.2387 15.071 15.9545 15.3723C15.5892 15.7595 15.073 16 14.5 16C13.3952 16 12.5 15.1048 12.5 14C12.5 12.8952 13.3952 12 14.5 12C15.0065 12 15.4697 12.1885 15.8228 12.5H14.75C14.3358 12.5 14 12.8358 14 13.25C14 13.6642 14.3358 14 14.75 14H17.25C17.6642 14 18 13.6642 18 13.25V10.75Z"
          fill={fill}
        />
        <path
          d="M1 6.75C1 5.23203 2.23054 4 3.75 4H14.25C15.7695 4 17 5.23203 17 6.75V8.51373C16.488 8.57033 16.0278 8.79872 15.6783 9.13999C15.3002 9.04851 14.9055 9 14.5 9C11.7384 9 9.5 11.2384 9.5 14C9.5 14.7111 9.64842 15.3876 9.91597 16H3.75C2.23054 16 1 14.768 1 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default SuitcaseRefresh;

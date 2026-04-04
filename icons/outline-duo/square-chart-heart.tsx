import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartHeart({
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
          d="M13.781 6.44701C13.919 6.51801 14.08 6.51801 14.218 6.44701C14.947 6.07301 17.249 4.717 17.249 2.513C17.253 1.545 16.458 0.756 15.472 0.75C14.879 0.757 14.328 1.051 13.999 1.536C13.67 1.052 13.118 0.758 12.526 0.75C11.541 0.756 10.746 1.544 10.749 2.513C10.749 4.718 13.052 6.07301 13.78 6.44701H13.781Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M8.5206 3.25101C8.5416 3.83201 9.13699 5.59899 10.464 6.82899C12.689 8.78699 13.632 8.84139 14.243 8.78239L14.25 13.75C14.25 14.855 13.355 15.75 12.25 15.75H3.75C2.645 15.75 1.75 14.855 1.75 13.75V5.25C1.75 4.145 2.645 3.25 3.75 3.25L8.5206 3.25101Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75 8.5V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8 6.25V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 9.5005V13.75C14.25 14.855 13.355 15.75 12.25 15.75H3.75C2.645 15.75 1.75 14.855 1.75 13.75V5.25C1.75 4.145 2.645 3.25 3.75 3.25H7.7951"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 6.44701C13.919 6.51801 14.08 6.51801 14.218 6.44701C14.947 6.07301 17.249 4.717 17.249 2.513C17.253 1.545 16.458 0.756 15.472 0.75C14.879 0.757 14.328 1.051 13.999 1.536C13.67 1.052 13.118 0.758 12.526 0.75C11.541 0.756 10.746 1.544 10.749 2.513C10.749 4.718 13.052 6.07301 13.78 6.44701H13.781Z"
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

export default SquareChartHeart;

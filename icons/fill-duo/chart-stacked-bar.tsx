import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStackedBar({
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
          d="M7 3.75C7 2.78349 7.78349 2 8.75 2H9.25C10.2165 2 11 2.78349 11 3.75V14.25C11 15.2165 10.2165 16 9.25 16H8.75C7.78349 16 7 15.2165 7 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.75 16H9.25C10.2165 16 11 15.2165 11 14.25V9H7V14.25C7 15.2165 7.78349 16 8.75 16Z"
          fill={fill}
        />
        <path
          d="M1.5 7.75C1.5 6.78349 2.28349 6 3.25 6H3.75C4.71651 6 5.5 6.78349 5.5 7.75V14.25C5.5 15.2165 4.71651 16 3.75 16H3.25C2.28349 16 1.5 15.2165 1.5 14.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.25 16H3.75C4.71651 16 5.5 15.2165 5.5 14.25V11H1.5V14.25C1.5 15.2165 2.28349 16 3.25 16Z"
          fill={fill}
        />
        <path
          d="M12.5 9.75C12.5 8.78349 13.2835 8 14.25 8H14.75C15.7165 8 16.5 8.78349 16.5 9.75V14.25C16.5 15.2165 15.7165 16 14.75 16H14.25C13.2835 16 12.5 15.2165 12.5 14.25L12.5 9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16.5 12V14.25C16.5 15.2165 15.7165 16 14.75 16H14.25C13.2835 16 12.5 15.2165 12.5 14.25V12H16.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartStackedBar;

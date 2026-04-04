import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chart2({
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
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 3.75C1.5 2.78349 2.28349 2 3.25 2H3.75C4.71651 2 5.5 2.78349 5.5 3.75V9.25C5.5 10.2165 4.71651 11 3.75 11H3.25C2.28349 11 1.5 10.2165 1.5 9.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.5 3.75C12.5 2.78349 13.2835 2 14.25 2H14.75C15.7165 2 16.5 2.78349 16.5 3.75V6.25C16.5 7.21651 15.7165 8 14.75 8H14.25C13.2835 8 12.5 7.21651 12.5 6.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Chart2;

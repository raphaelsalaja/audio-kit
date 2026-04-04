import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GamingButtons({
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
          d="M2 3.75C2 2.78349 2.78349 2 3.75 2H6.25C7.21651 2 8 2.78349 8 3.75V6.25C8 7.21651 7.21651 8 6.25 8H3.75C2.78349 8 2 7.21651 2 6.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 13C9.75 11.2051 11.2051 9.75 13 9.75C14.7949 9.75 16.25 11.2051 16.25 13C16.25 14.7949 14.7949 16.25 13 16.25C11.2051 16.25 9.75 14.7949 9.75 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.78033 11.2803C8.07322 10.9874 8.07322 10.5126 7.78033 10.2197C7.48744 9.92678 7.01256 9.92678 6.71967 10.2197L5 11.9393L3.28033 10.2197C2.98744 9.92678 2.51256 9.92678 2.21967 10.2197C1.92678 10.5126 1.92678 10.9874 2.21967 11.2803L3.93934 13L2.21967 14.7197C1.92678 15.0126 1.92678 15.4874 2.21967 15.7803C2.51256 16.0732 2.98744 16.0732 3.28033 15.7803L5 14.0607L6.71967 15.7803C7.01256 16.0732 7.48744 16.0732 7.78033 15.7803C8.07322 15.4874 8.07322 15.0126 7.78033 14.7197L6.06066 13L7.78033 11.2803Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.0104 2.58371L16.1268 6.24857C16.5746 7.02538 16.0158 8 15.1156 8H10.8834C9.98322 8 9.42416 7.02579 9.87205 6.24898C10.5775 5.02736 11.2831 3.80578 11.9877 2.58371C12.4365 1.8053 13.5614 1.80557 14.0104 2.58371Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default GamingButtons;

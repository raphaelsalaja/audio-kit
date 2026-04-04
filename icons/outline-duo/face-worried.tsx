import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceWorried({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.10301 12.801C6.25701 12.955 6.46901 13.022 6.68601 12.99C8.21801 12.751 9.79801 12.752 11.324 12.991C11.538 13.023 11.745 12.956 11.896 12.806C12.05 12.653 12.123 12.43 12.089 12.208C11.859 10.697 10.531 9.55701 9.00001 9.55701C7.46901 9.55701 6.14001 10.698 5.91101 12.211C5.87801 12.427 5.95001 12.648 6.10301 12.801Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceWorried;

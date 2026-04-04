import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallBasket2({
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
          d="M8.82083 1.75217C8.72716 5.6139 5.6139 8.72716 1.75217 8.82083C1.75073 8.88038 1.75 8.9401 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25C9.0599 16.25 9.11963 16.2493 9.17917 16.2478C9.27284 12.3861 12.3861 9.27284 16.2478 9.17917C16.2493 9.11963 16.25 9.0599 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C8.9401 1.75 8.88038 1.75073 8.82083 1.75217Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.82299 1.753C8.77899 3.549 8.07199 5.332 6.70199 6.702C5.33199 8.072 3.54899 8.78 1.75299 8.823"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.247 9.177C14.451 9.221 12.668 9.928 11.298 11.298C9.927 12.669 9.22 14.451 9.177 16.247"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.127 3.873L3.87299 14.127"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.127 14.127L3.87299 3.873"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
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

export default BallBasket2;

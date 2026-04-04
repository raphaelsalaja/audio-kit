import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Necktie({
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
          d="M10.25 5.25L12.131 13.714C12.205 14.048 12.104 14.396 11.862 14.638L9.70701 16.793C9.31601 17.184 8.68302 17.184 8.29302 16.793L6.13802 14.638C5.89602 14.396 5.79502 14.048 5.86902 13.714L7.75002 5.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 5.25L12.131 13.714C12.205 14.048 12.104 14.396 11.862 14.638L9.70701 16.793C9.31601 17.184 8.68302 17.184 8.29302 16.793L6.13802 14.638C5.89602 14.396 5.79502 14.048 5.86902 13.714L7.75002 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.736 2.64999C12.03 2.13499 11.821 1.46399 11.272 1.23899C10.693 1.00099 9.92101 0.787994 9.00001 0.787994C8.07901 0.787994 7.30701 1.00099 6.72801 1.23899C6.17901 1.46399 5.97001 2.13499 6.26401 2.64999C6.75901 3.51699 7.25401 4.38299 7.75001 5.24999H10.25L11.736 2.64999Z"
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

export default Necktie;

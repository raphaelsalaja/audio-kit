import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Baloon2({
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
          d="M2.75 8C2.75 4.22695 5.46097 1 9 1C12.539 1 15.25 4.22695 15.25 8C15.25 11.7731 12.539 15 9 15C5.46097 15 2.75 11.7731 2.75 8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.97862 14.9084L7.14699 15.74C7.03399 15.853 6.98199 16.012 7.00599 16.17C7.02999 16.327 7.12799 16.464 7.26899 16.537C7.85899 16.845 8.43699 16.998 9.01199 16.998C9.58699 16.998 10.16 16.843 10.736 16.534C10.876 16.459 10.971 16.323 10.994 16.166C11.017 16.01 10.966 15.852 10.854 15.74L10.0222 14.9082C9.69075 14.9685 9.34941 15 9 15C8.65088 15 8.30982 14.9686 7.97862 14.9084Z"
          fill={fill}
        />
        <path
          d="M9 5C7.90768 5 6.75 6.18146 6.75 8C6.75 8.41421 6.41421 8.75 6 8.75C5.58579 8.75 5.25 8.41421 5.25 8C5.25 5.68254 6.78432 3.5 9 3.5C9.41421 3.5 9.75 3.83579 9.75 4.25C9.75 4.66421 9.41421 5 9 5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Baloon2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserDots({
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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 16C12.449 16 12 15.552 12 15C12 14.448 12.449 14 13 14C13.551 14 14 14.448 14 15C14 15.552 13.551 16 13 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10 16C9.449 16 9 15.552 9 15C9 14.448 9.449 14 10 14C10.551 14 11 14.448 11 15C11 15.552 10.551 16 10 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 16C15.449 16 15 15.552 15 15C15 14.448 15.449 14 16 14C16.551 14 17 14.448 17 15C17 15.552 16.551 16 16 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.6301 11.8333C12.4901 10.5601 10.8456 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C4.99589 15.7544 5.91739 15.9712 6.95689 16.1072"
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

export default UserDots;

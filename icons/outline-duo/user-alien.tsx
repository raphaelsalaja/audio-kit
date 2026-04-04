import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserAlien({
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
          d="M4.75 6C4.75 3.653 6.653 1.75 9 1.75C11.347 1.75 13.25 3.653 13.25 6C13.25 8.347 10.406 10.75 9 10.75C7.594 10.75 4.75 8.347 4.75 6Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.917 7.5C9.687 7.5 9.5 7.313 9.5 7.083C9.5 5.933 10.434 5 11.583 5C11.813 5 12 5.187 12 5.417C12 6.567 11.066 7.5 9.917 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.417 5C7.567 5 8.5 5.934 8.5 7.083C8.5 7.313 8.313 7.5 8.083 7.5C6.933 7.5 6 6.566 6 5.417C6 5.187 6.187 5 6.417 5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.75 6C4.75 3.653 6.653 1.75 9 1.75C11.347 1.75 13.25 3.653 13.25 6C13.25 8.347 10.406 10.75 9 10.75C7.594 10.75 4.75 8.347 4.75 6Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.953 16C4.251 14.042 6.475 12.75 9 12.75C11.525 12.75 13.749 14.041 15.047 16"
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

export default UserAlien;

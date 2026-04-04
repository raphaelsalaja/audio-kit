import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fireworks({
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
          d="M2 7C2.55228 7 3 6.55228 3 6C3 5.44772 2.55228 5 2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 7C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5C15.4477 5 15 5.44772 15 6C15 6.55228 15.4477 7 16 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.25 6.75C13.25 6.75 9 8.477 9 16.25C9 8.477 4.75 6.75 4.75 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.158 2.99L9.895 2.569L9.474 1.306C9.337 0.898 8.662 0.898 8.525 1.306L8.104 2.569L6.841 2.99C6.637 3.058 6.499 3.249 6.499 3.464C6.499 3.679 6.637 3.87 6.841 3.938L8.104 4.359L8.525 5.622C8.593 5.826 8.785 5.964 9 5.964C9.215 5.964 9.406 5.826 9.475 5.622L9.896 4.359L11.159 3.938C11.363 3.87 11.501 3.679 11.501 3.464C11.501 3.249 11.363 3.058 11.159 2.99H11.158Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.658 12.026L4.395 11.605L3.974 10.342C3.837 9.934 3.162 9.934 3.025 10.342L2.604 11.605L1.341 12.026C1.137 12.094 0.999001 12.285 0.999001 12.5C0.999001 12.715 1.137 12.906 1.341 12.974L2.604 13.395L3.025 14.658C3.093 14.862 3.285 15 3.5 15C3.715 15 3.906 14.862 3.975 14.658L4.396 13.395L5.659 12.974C5.863 12.906 6.001 12.715 6.001 12.5C6.001 12.285 5.862 12.094 5.658 12.026Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.342 12.026L13.605 11.605L14.026 10.342C14.163 9.934 14.839 9.934 14.975 10.342L15.396 11.605L16.659 12.026C16.863 12.094 17.001 12.285 17.001 12.5C17.001 12.715 16.863 12.906 16.659 12.974L15.396 13.395L14.975 14.658C14.907 14.862 14.715 15 14.5 15C14.285 15 14.094 14.862 14.025 14.658L13.604 13.395L12.341 12.974C12.137 12.906 11.999 12.715 11.999 12.5C11.999 12.285 12.137 12.094 12.341 12.026H12.342Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Fireworks;

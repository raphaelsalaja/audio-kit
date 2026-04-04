import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallEatingDots({
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
          d="M13.5 10C14.0523 10 14.5 9.55228 14.5 9C14.5 8.44772 14.0523 8 13.5 8C12.9477 8 12.5 8.44772 12.5 9C12.5 9.55228 12.9477 10 13.5 10Z"
          fill={secondaryfill}
        />
        <path
          d="M17 10C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10Z"
          fill={secondaryfill}
        />
        <path
          d="M9.751 9L14.744 5.255C14.903 5.135 15.008 4.958 15.036 4.761C15.064 4.564 15.013 4.364 14.893 4.204C13.363 2.168 11.032 1 8.499 1C4.089 1 0.5 4.589 0.5 9C0.5 13.411 4.089 17 8.5 17C11.033 17 13.363 15.832 14.894 13.796C15.014 13.637 15.065 13.437 15.037 13.239C15.009 13.042 14.904 12.864 14.745 12.745L9.751 9ZM9.207 5.707C8.816 6.098 8.183 6.098 7.793 5.707C7.402 5.317 7.402 4.683 7.793 4.293C8.184 3.902 8.817 3.902 9.207 4.293C9.598 4.683 9.598 5.317 9.207 5.707Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BallEatingDots;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Logo({
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
          d="M15.25 11.473V6.52701C15.25 5.81401 14.87 5.15501 14.253 4.79701L10.003 2.33201C9.382 1.97201 8.617 1.97201 7.996 2.33201L3.747 4.79701C3.13 5.15501 2.75 5.81401 2.75 6.52701V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.473V6.52701C15.25 5.81401 14.87 5.15501 14.253 4.79701L10.003 2.33201C9.382 1.97201 8.617 1.97201 7.996 2.33201L3.747 4.79701C3.13 5.15501 2.75 5.81401 2.75 6.52701V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.606 7.655C12.562 7.519 12.445 7.42 12.304 7.4L10.253 7.102L9.33599 5.244C9.20899 4.988 8.78999 4.988 8.66299 5.244L7.74599 7.102L5.69499 7.4C5.55399 7.421 5.43699 7.52 5.39299 7.655C5.34899 7.791 5.38599 7.94 5.48799 8.039L6.97199 9.485L6.62099 11.527C6.59699 11.668 6.65499 11.81 6.76999 11.894C6.88499 11.978 7.03899 11.988 7.16499 11.923L8.99899 10.959L10.833 11.923C10.888 11.952 10.948 11.966 11.007 11.966C11.085 11.966 11.162 11.942 11.228 11.894C11.343 11.81 11.401 11.668 11.377 11.527L11.026 9.485L12.51 8.039C12.612 7.939 12.649 7.79 12.605 7.655H12.606Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Logo;

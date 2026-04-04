import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FxBlur({
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
          d="M6.5 7.75C7.19036 7.75 7.75 7.19036 7.75 6.5C7.75 5.80964 7.19036 5.25 6.5 5.25C5.80964 5.25 5.25 5.80964 5.25 6.5C5.25 7.19036 5.80964 7.75 6.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.5 7.75C12.1904 7.75 12.75 7.19036 12.75 6.5C12.75 5.80964 12.1904 5.25 11.5 5.25C10.8096 5.25 10.25 5.80964 10.25 6.5C10.25 7.19036 10.8096 7.75 11.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.5 12.75C7.19036 12.75 7.75 12.1904 7.75 11.5C7.75 10.8096 7.19036 10.25 6.5 10.25C5.80964 10.25 5.25 10.8096 5.25 11.5C5.25 12.1904 5.80964 12.75 6.5 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.5 12.75C12.1904 12.75 12.75 12.1904 12.75 11.5C12.75 10.8096 12.1904 10.25 11.5 10.25C10.8096 10.25 10.25 10.8096 10.25 11.5C10.25 12.1904 10.8096 12.75 11.5 12.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.5 3C7.05228 3 7.5 2.55228 7.5 2C7.5 1.44772 7.05228 1 6.5 1C5.94772 1 5.5 1.44772 5.5 2C5.5 2.55228 5.94772 3 6.5 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 3C12.0523 3 12.5 2.55228 12.5 2C12.5 1.44772 12.0523 1 11.5 1C10.9477 1 10.5 1.44772 10.5 2C10.5 2.55228 10.9477 3 11.5 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 7.5C16.5523 7.5 17 7.05228 17 6.5C17 5.94772 16.5523 5.5 16 5.5C15.4477 5.5 15 5.94772 15 6.5C15 7.05228 15.4477 7.5 16 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16 12.5C16.5523 12.5 17 12.0523 17 11.5C17 10.9477 16.5523 10.5 16 10.5C15.4477 10.5 15 10.9477 15 11.5C15 12.0523 15.4477 12.5 16 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 17C12.0523 17 12.5 16.5523 12.5 16C12.5 15.4477 12.0523 15 11.5 15C10.9477 15 10.5 15.4477 10.5 16C10.5 16.5523 10.9477 17 11.5 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 17C7.05228 17 7.5 16.5523 7.5 16C7.5 15.4477 7.05228 15 6.5 15C5.94772 15 5.5 15.4477 5.5 16C5.5 16.5523 5.94772 17 6.5 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 12.5C2.55228 12.5 3 12.0523 3 11.5C3 10.9477 2.55228 10.5 2 10.5C1.44772 10.5 1 10.9477 1 11.5C1 12.0523 1.44772 12.5 2 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 7.5C2.55228 7.5 3 7.05228 3 6.5C3 5.94772 2.55228 5.5 2 5.5C1.44772 5.5 1 5.94772 1 6.5C1 7.05228 1.44772 7.5 2 7.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.5 7.75C7.19036 7.75 7.75 7.19036 7.75 6.5C7.75 5.80964 7.19036 5.25 6.5 5.25C5.80964 5.25 5.25 5.80964 5.25 6.5C5.25 7.19036 5.80964 7.75 6.5 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 7.75C12.1904 7.75 12.75 7.19036 12.75 6.5C12.75 5.80964 12.1904 5.25 11.5 5.25C10.8096 5.25 10.25 5.80964 10.25 6.5C10.25 7.19036 10.8096 7.75 11.5 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 12.75C7.19036 12.75 7.75 12.1904 7.75 11.5C7.75 10.8096 7.19036 10.25 6.5 10.25C5.80964 10.25 5.25 10.8096 5.25 11.5C5.25 12.1904 5.80964 12.75 6.5 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 12.75C12.1904 12.75 12.75 12.1904 12.75 11.5C12.75 10.8096 12.1904 10.25 11.5 10.25C10.8096 10.25 10.25 10.8096 10.25 11.5C10.25 12.1904 10.8096 12.75 11.5 12.75Z"
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

export default FxBlur;

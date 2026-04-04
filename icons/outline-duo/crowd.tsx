import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crowd({
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
          d="M4.25 12.25C5.2165 12.25 6 11.4665 6 10.5C6 9.5335 5.2165 8.75 4.25 8.75C3.2835 8.75 2.5 9.5335 2.5 10.5C2.5 11.4665 3.2835 12.25 4.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.25C9.9665 4.25 10.75 3.4665 10.75 2.5C10.75 1.5335 9.9665 0.75 9 0.75C8.0335 0.75 7.25 1.5335 7.25 2.5C7.25 3.4665 8.0335 4.25 9 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 12C14.5784 12 15.25 11.3284 15.25 10.5C15.25 9.67157 14.5784 9 13.75 9C12.9216 9 12.25 9.67157 12.25 10.5C12.25 11.3284 12.9216 12 13.75 12Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 12.25C5.2165 12.25 6 11.4665 6 10.5C6 9.5335 5.2165 8.75 4.25 8.75C3.2835 8.75 2.5 9.5335 2.5 10.5C2.5 11.4665 3.2835 12.25 4.25 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.895004 17C1.325 15.554 2.665 14.5 4.25 14.5C5.835 14.5 7.175 15.554 7.605 17"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.25C9.9665 4.25 10.75 3.4665 10.75 2.5C10.75 1.5335 9.9665 0.75 9 0.75C8.0335 0.75 7.25 1.5335 7.25 2.5C7.25 3.4665 8.0335 4.25 9 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.194 7.273C10.594 6.789 9.831 6.5 9 6.5C8.169 6.5 7.406 6.789 6.806 7.273"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 12C14.5784 12 15.25 11.3284 15.25 10.5C15.25 9.67157 14.5784 9 13.75 9C12.9216 9 12.25 9.67157 12.25 10.5C12.25 11.3284 12.9216 12 13.75 12Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.395 17C10.825 15.554 12.165 14.5 13.75 14.5C15.335 14.5 16.675 15.554 17.105 17"
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

export default Crowd;

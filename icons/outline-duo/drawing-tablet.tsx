import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawingTablet({
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
          d="M8.16797 6.13672L7.98573 5.75H4.75V12.25H10.0659L9.82588 11.4999C9.23909 11.4967 8.66746 11.2634 8.24501 10.841C7.81342 10.4094 7.57614 9.82122 7.58632 9.21211C7.59431 8.73211 7.64452 8.25314 7.72212 7.77962C7.81351 7.22198 7.95272 6.66093 8.16797 6.13672Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.836 9.25C9.836 9.25 11.87 9.216 12.586 8.5L16.836 4.25C17.388 3.698 17.388 2.802 16.836 2.25C16.284 1.698 15.388 1.698 14.836 2.25L10.586 6.5C9.87 7.216 9.836 9.25 9.836 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 9.07831V13.25C16.25 14.355 15.355 15.25 14.25 15.25H3.75C2.645 15.25 1.75 14.355 1.75 13.25V4.75C1.75 3.645 2.645 2.75 3.75 2.75H10.0938"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.25H4.75V5.75H7.5351"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.836 9.25C9.836 9.25 11.87 9.216 12.586 8.5L16.836 4.25C17.388 3.698 17.388 2.802 16.836 2.25C16.284 1.698 15.388 1.698 14.836 2.25L10.586 6.5C9.87 7.216 9.836 9.25 9.836 9.25Z"
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

export default DrawingTablet;

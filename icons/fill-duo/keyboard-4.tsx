import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard4({
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
          d="M1 6.75C1 5.23128 2.23069 4 3.75 4H14.25C15.7693 4 17 5.23128 17 6.75V11.25C17 12.7687 15.7693 14 14.25 14H3.75C2.23069 14 1 12.7687 1 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 10.75C6 10.3358 6.33579 10 6.75 10H11.25C11.6642 10 12 10.3358 12 10.75C12 11.1642 11.6642 11.5 11.25 11.5H6.75C6.33579 11.5 6 11.1642 6 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 7H7.25C6.974 7 6.75 7.2239 6.75 7.5V8C6.75 8.2761 6.974 8.5 7.25 8.5H7.75C8.026 8.5 8.25 8.2761 8.25 8V7.5C8.25 7.2239 8.026 7 7.75 7Z"
          fill={fill}
        />
        <path
          d="M4.75 7H4.25C3.974 7 3.75 7.2239 3.75 7.5V8C3.75 8.2761 3.974 8.5 4.25 8.5H4.75C5.026 8.5 5.25 8.2761 5.25 8V7.5C5.25 7.2239 5.026 7 4.75 7Z"
          fill={fill}
        />
        <path
          d="M10.75 7H10.25C9.974 7 9.75 7.2239 9.75 7.5V8C9.75 8.2761 9.974 8.5 10.25 8.5H10.75C11.026 8.5 11.25 8.2761 11.25 8V7.5C11.25 7.2239 11.026 7 10.75 7Z"
          fill={fill}
        />
        <path
          d="M13.75 7H13.25C12.974 7 12.75 7.2239 12.75 7.5V8C12.75 8.2761 12.974 8.5 13.25 8.5H13.75C14.026 8.5 14.25 8.2761 14.25 8V7.5C14.25 7.2239 14.026 7 13.75 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Keyboard4;

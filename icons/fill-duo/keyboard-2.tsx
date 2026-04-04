import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard2({
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
          d="M1 5.75C1 4.23128 2.23069 3 3.75 3H14.25C15.7693 3 17 4.23128 17 5.75V12.25C17 13.7687 15.7693 15 14.25 15H3.75C2.23069 15 1 13.7687 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 11.75C6 11.3358 6.33579 11 6.75 11H11.25C11.6642 11 12 11.3358 12 11.75C12 12.1642 11.6642 12.5 11.25 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.75 8H7.25C6.974 8 6.75 8.2239 6.75 8.5V9C6.75 9.2761 6.974 9.5 7.25 9.5H7.75C8.026 9.5 8.25 9.2761 8.25 9V8.5C8.25 8.2239 8.026 8 7.75 8Z"
          fill={fill}
        />
        <path
          d="M4.75 8H4.25C3.974 8 3.75 8.2239 3.75 8.5V9C3.75 9.2761 3.974 9.5 4.25 9.5H4.75C5.026 9.5 5.25 9.2761 5.25 9V8.5C5.25 8.2239 5.026 8 4.75 8Z"
          fill={fill}
        />
        <path
          d="M10.75 8H10.25C9.974 8 9.75 8.2239 9.75 8.5V9C9.75 9.2761 9.974 9.5 10.25 9.5H10.75C11.026 9.5 11.25 9.2761 11.25 9V8.5C11.25 8.2239 11.026 8 10.75 8Z"
          fill={fill}
        />
        <path
          d="M13.75 8H13.25C12.974 8 12.75 8.2239 12.75 8.5V9C12.75 9.2761 12.974 9.5 13.25 9.5H13.75C14.026 9.5 14.25 9.2761 14.25 9V8.5C14.25 8.2239 14.026 8 13.75 8Z"
          fill={fill}
        />
        <path
          d="M6.25 5.5H5.75C5.474 5.5 5.25 5.7239 5.25 6V6.5C5.25 6.7761 5.474 7 5.75 7H6.25C6.526 7 6.75 6.7761 6.75 6.5V6C6.75 5.7239 6.526 5.5 6.25 5.5Z"
          fill={fill}
        />
        <path
          d="M9.25 5.5H8.75C8.474 5.5 8.25 5.7239 8.25 6V6.5C8.25 6.7761 8.474 7 8.75 7H9.25C9.526 7 9.75 6.7761 9.75 6.5V6C9.75 5.7239 9.526 5.5 9.25 5.5Z"
          fill={fill}
        />
        <path
          d="M12.25 5.5H11.75C11.474 5.5 11.25 5.7239 11.25 6V6.5C11.25 6.7761 11.474 7 11.75 7H12.25C12.526 7 12.75 6.7761 12.75 6.5V6C12.75 5.7239 12.526 5.5 12.25 5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Keyboard2;

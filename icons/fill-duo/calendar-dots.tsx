import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDots({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H8.50045C7.89335 15.544 7.5 14.8181 7.5 14C7.5 12.6186 8.62155 11.5 10 11.5C12 11.5 14 11.5 16 11.5C16.1712 11.5 16.3384 11.5173 16.5 11.5501V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13 15C12.449 15 12 14.552 12 14C12 13.448 12.449 13 13 13C13.551 13 14 13.448 14 14C14 14.552 13.551 15 13 15Z"
          fill={fill}
        />
        <path
          d="M10 15C9.449 15 9 14.552 9 14C9 13.448 9.449 13 10 13C10.551 13 11 13.448 11 14C11 14.552 10.551 15 10 15Z"
          fill={fill}
        />
        <path
          d="M16 15C15.449 15 15 14.552 15 14C15 13.448 15.449 13 16 13C16.551 13 17 13.448 17 14C17 14.552 16.551 15 16 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarDots;

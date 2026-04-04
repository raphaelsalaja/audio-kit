import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarPin({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H10.1466C9.76775 15.2904 9.5 14.4529 9.5 13.5C9.5 10.7419 11.7419 8.5 14.5 8.5C15.2108 8.5 15.8873 8.64889 16.5 8.91715V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 10C12.5703 10 11 11.5703 11 13.5C11 16.1543 14.0107 17.8369 14.1396 17.9072C14.2519 17.9687 14.3759 18 14.5 18C14.6241 18 14.748 17.9688 14.8604 17.9072C14.9893 17.8369 18 16.1543 18 13.5C18 11.5703 16.4297 10 14.5 10ZM14.5 14.5C13.9478 14.5 13.5 14.0522 13.5 13.5C13.5 12.9478 13.9478 12.5 14.5 12.5C15.0522 12.5 15.5 12.9477 15.5 13.5C15.5 14.0523 15.0522 14.5 14.5 14.5Z"
          fill={fill}
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarPin;

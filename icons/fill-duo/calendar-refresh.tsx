import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarRefresh({
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
          d="M1.5 4.75C1.5 3.23069 2.73128 2 4.25 2H13.75C15.2687 2 16.5 3.23069 16.5 4.75V8.51373C15.9882 8.57031 15.5281 8.79859 15.1786 9.13968C14.8009 9.04841 14.4063 9 14 9C11.2384 9 9 11.2384 9 14C9 14.7111 9.14842 15.3876 9.41597 16H4.25C2.73128 16 1.5 14.7693 1.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.5 10.75C17.5 10.3358 17.1642 10 16.75 10C16.3358 10 16 10.3358 16 10.75V11.1276C15.4334 10.7322 14.7442 10.5 14 10.5C12.0668 10.5 10.5 12.0668 10.5 14C10.5 15.9332 12.0668 17.5 14 17.5C15.003 17.5 15.9088 17.0765 16.5455 16.4017C16.8298 16.1004 16.816 15.6257 16.5147 15.3415C16.2134 15.0572 15.7387 15.071 15.4545 15.3723C15.0892 15.7595 14.573 16 14 16C12.8952 16 12 15.1048 12 14C12 12.8952 12.8952 12 14 12C14.5065 12 14.9697 12.1885 15.3228 12.5H14.25C13.8358 12.5 13.5 12.8358 13.5 13.25C13.5 13.6642 13.8358 14 14.25 14H16.75C17.1642 14 17.5 13.6642 17.5 13.25V10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarRefresh;

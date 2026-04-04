import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarCheckIn({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H9.81802L9.65901 15.841C8.78033 14.9623 8.78033 13.5377 9.65901 12.659L12.159 10.159C13.0377 9.28033 14.4623 9.28033 15.341 10.159C15.844 10.662 16.0591 11.344 15.9862 12H16.25C16.3345 12 16.4179 12.0047 16.5 12.0137V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.2803 12.2803C14.5732 11.9874 14.5732 11.5126 14.2803 11.2197C13.9874 10.9268 13.5126 10.9268 13.2197 11.2197L10.7197 13.7197C10.4268 14.0126 10.4268 14.4874 10.7197 14.7803L13.2197 17.2803C13.5126 17.5732 13.9874 17.5732 14.2803 17.2803C14.5732 16.9874 14.5732 16.5126 14.2803 16.2197L13.0607 15H16.25C16.6642 15 17 14.6642 17 14.25C17 13.8358 16.6642 13.5 16.25 13.5H13.0607L14.2803 12.2803Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarCheckIn;

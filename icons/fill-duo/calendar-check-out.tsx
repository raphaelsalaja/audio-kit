import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarCheckOut({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H9.83567C9.32592 15.5875 9 14.9568 9 14.25C9 13.0074 10.0074 12 11.25 12H11.5138C11.4409 11.344 11.656 10.662 12.159 10.159C13.0377 9.28033 14.4623 9.28033 15.341 10.159L16.5 11.318V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.2803 11.2197C13.9874 10.9268 13.5126 10.9268 13.2197 11.2197C12.9268 11.5126 12.9268 11.9874 13.2197 12.2803L14.4393 13.5H11.25C10.8358 13.5 10.5 13.8358 10.5 14.25C10.5 14.6642 10.8358 15 11.25 15H14.4393L13.2197 16.2197C12.9268 16.5126 12.9268 16.9874 13.2197 17.2803C13.5126 17.5732 13.9874 17.5732 14.2803 17.2803L16.7803 14.7803C17.0732 14.4874 17.0732 14.0126 16.7803 13.7197L14.2803 11.2197Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarCheckOut;

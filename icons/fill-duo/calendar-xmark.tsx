import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarXmark({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H10.6281C10.7364 15.6929 10.9134 15.4046 11.159 15.159L11.568 14.75L11.159 14.341C10.2803 13.4623 10.2803 12.0377 11.159 11.159C12.0377 10.2803 13.4623 10.2803 14.341 11.159L14.75 11.568L15.159 11.159C15.5347 10.7834 16.0101 10.5683 16.5 10.5138V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.2803 12.2197C12.9874 11.9268 12.5126 11.9268 12.2197 12.2197C11.9268 12.5126 11.9268 12.9874 12.2197 13.2803L13.6893 14.75L12.2197 16.2197C11.9268 16.5126 11.9268 16.9874 12.2197 17.2803C12.5126 17.5732 12.9874 17.5732 13.2803 17.2803L14.75 15.8107L16.2197 17.2803C16.5126 17.5732 16.9874 17.5732 17.2803 17.2803C17.5732 16.9874 17.5732 16.5126 17.2803 16.2197L15.8107 14.75L17.2803 13.2803C17.5732 12.9874 17.5732 12.5126 17.2803 12.2197C16.9874 11.9268 16.5126 11.9268 16.2197 12.2197L14.75 13.6893L13.2803 12.2197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CalendarXmark;

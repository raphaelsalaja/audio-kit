import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CalendarDownload({
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
          d="M4.25 2C2.73128 2 1.5 3.23069 1.5 4.75V13.25C1.5 14.7693 2.73128 16 4.25 16H10.3787C9.79319 15.1256 9.88665 13.9314 10.659 13.159C11.162 12.656 11.844 12.4409 12.5 12.5138V12.25C12.5 11.0074 13.5074 10 14.75 10C15.4568 10 16.0875 10.3259 16.5 10.8357V4.75C16.5 3.23069 15.2687 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 0.75C6.5 0.335786 6.16421 0 5.75 0C5.33579 0 5 0.335786 5 0.75V2H4.25C2.73079 2 1.5 3.23079 1.5 4.75V6H16.5V4.75C16.5 3.23079 15.2692 2 13.75 2H13V0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V2H6.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.5 12.25C15.5 11.8358 15.1642 11.5 14.75 11.5C14.3358 11.5 14 11.8358 14 12.25V15.4393L12.7803 14.2197C12.4874 13.9268 12.0126 13.9268 11.7197 14.2197C11.4268 14.5126 11.4268 14.9874 11.7197 15.2803L14.2197 17.7803C14.5126 18.0732 14.9874 18.0732 15.2803 17.7803L17.7803 15.2803C18.0732 14.9874 18.0732 14.5126 17.7803 14.2197C17.4874 13.9268 17.0126 13.9268 16.7197 14.2197L15.5 15.4393V12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CalendarDownload;

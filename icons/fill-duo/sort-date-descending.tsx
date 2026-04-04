import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortDateDescending({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V13.25C1.5 14.7692 2.73079 16 4.25 16H9.81802L9.15901 15.341C8.28033 14.4623 8.28033 13.0377 9.15901 12.159C9.66204 11.656 10.344 11.4409 11 11.5138V10.75C11 9.50736 12.0074 8.5 13.25 8.5C14.4926 8.5 15.5 9.50736 15.5 10.75V11.5138C15.8357 11.4765 16.1782 11.5146 16.5 11.6281V4.75C16.5 3.23079 15.2692 2 13.75 2H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14 10.75C14 10.3358 13.6642 10 13.25 10C12.8358 10 12.5 10.3358 12.5 10.75V14.4393L11.2803 13.2197C10.9874 12.9268 10.5126 12.9268 10.2197 13.2197C9.92678 13.5126 9.92678 13.9874 10.2197 14.2803L12.7197 16.7803C13.0126 17.0732 13.4874 17.0732 13.7803 16.7803L16.2803 14.2803C16.5732 13.9874 16.5732 13.5126 16.2803 13.2197C15.9874 12.9268 15.5126 12.9268 15.2197 13.2197L14 14.4393V10.75Z"
          fill={fill}
          fillRule="evenodd"
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

export default SortDateDescending;

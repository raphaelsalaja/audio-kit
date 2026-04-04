import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortDateAscending({
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
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V10.818L14.841 9.15901C13.9623 8.28033 12.5377 8.28033 11.659 9.15901L9.15901 11.659C8.28033 12.5377 8.28033 13.9623 9.15901 14.841C9.66204 15.344 10.344 15.5591 11 15.4862V16H4.25C2.73079 16 1.5 14.7692 1.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.7803 10.2197C13.4874 9.92678 13.0126 9.92678 12.7197 10.2197L10.2197 12.7197C9.92678 13.0126 9.92678 13.4874 10.2197 13.7803C10.5126 14.0732 10.9874 14.0732 11.2803 13.7803L12.5 12.5607V16.25C12.5 16.6642 12.8358 17 13.25 17C13.6642 17 14 16.6642 14 16.25V12.5607L15.2197 13.7803C15.5126 14.0732 15.9874 14.0732 16.2803 13.7803C16.5732 13.4874 16.5732 13.0126 16.2803 12.7197L13.7803 10.2197Z"
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

export default SortDateAscending;

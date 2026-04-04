import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectNew({
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
          d="M15.5 0.75C15.5 0.335786 15.1642 0 14.75 0C14.3358 0 14 0.335786 14 0.75V2.5H12.25C11.8358 2.5 11.5 2.83579 11.5 3.25C11.5 3.66421 11.8358 4 12.25 4H14V5.75C14 6.16421 14.3358 6.5 14.75 6.5C15.1642 6.5 15.5 6.16421 15.5 5.75V4H17.25C17.6642 4 18 3.66421 18 3.25C18 2.83579 17.6642 2.5 17.25 2.5H15.5V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 4C3.55921 4 3 4.55921 3 5.25C3 5.66421 2.66421 6 2.25 6C1.83579 6 1.5 5.66421 1.5 5.25C1.5 3.73079 2.73079 2.5 4.25 2.5C4.66421 2.5 5 2.83579 5 3.25C5 3.66421 4.66421 4 4.25 4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.75 13C15.1642 13 15.5 13.3358 15.5 13.75C15.5 15.2692 14.2692 16.5 12.75 16.5C12.3358 16.5 12 16.1642 12 15.75C12 15.3358 12.3358 15 12.75 15C13.4408 15 14 14.4408 14 13.75C14 13.3358 14.3358 13 14.75 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.25 13C2.66421 13 3 13.3358 3 13.75C3 14.4408 3.55921 15 4.25 15C4.66421 15 5 15.3358 5 15.75C5 16.1642 4.66421 16.5 4.25 16.5C2.73079 16.5 1.5 15.2692 1.5 13.75C1.5 13.3358 1.83579 13 2.25 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 3.25C6.5 2.83579 6.83579 2.5 7.25 2.5H9.25C9.66421 2.5 10 2.83579 10 3.25C10 3.66421 9.66421 4 9.25 4H7.25C6.83579 4 6.5 3.66421 6.5 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 15.75C6.5 15.3358 6.83579 15 7.25 15H9.75C10.1642 15 10.5 15.3358 10.5 15.75C10.5 16.1642 10.1642 16.5 9.75 16.5H7.25C6.83579 16.5 6.5 16.1642 6.5 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.75 8C15.1642 8 15.5 8.33579 15.5 8.75V10.75C15.5 11.1642 15.1642 11.5 14.75 11.5C14.3358 11.5 14 11.1642 14 10.75V8.75C14 8.33579 14.3358 8 14.75 8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.25 7.5C2.66421 7.5 3 7.83579 3 8.25V10.75C3 11.1642 2.66421 11.5 2.25 11.5C1.83579 11.5 1.5 11.1642 1.5 10.75V8.25C1.5 7.83579 1.83579 7.5 2.25 7.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SelectNew;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nail({
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
          d="M6.5 14.25C6.5 13.8358 6.83579 13.5 7.25 13.5H10.75C11.1642 13.5 11.5 13.8358 11.5 14.25C11.5 14.6642 11.1642 15 10.75 15H7.25C6.83579 15 6.5 14.6642 6.5 14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5931 3.21064C10.7899 2.84617 11.2449 2.71027 11.6094 2.90708C13.3291 3.83575 14.5 5.65549 14.5 7.75001V15.75C14.5 16.1642 14.1642 16.5 13.75 16.5C13.3358 16.5 13 16.1642 13 15.75V7.75001C13 6.22853 12.1509 4.90426 10.8966 4.22693C10.5321 4.03012 10.3962 3.57511 10.5931 3.21064Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.39495 3.21482C7.59276 3.57874 7.4581 4.03412 7.09417 4.23194C5.84479 4.91104 5 6.23189 5 7.74999V15.75C5 16.1642 4.66421 16.5 4.25 16.5C3.83579 16.5 3.5 16.1642 3.5 15.75V7.74999C3.5 5.66009 4.66521 3.84494 6.37783 2.91404C6.74175 2.71623 7.19713 2.85089 7.39495 3.21482Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.912 1.0161C7.3939 0.764442 8.10902 0.501007 9 0.501007C9.31382 0.501007 10.1523 0.533394 11.0664 1.00425C11.6571 1.30954 12 1.92426 12 2.556V8C12 9.51921 10.7692 10.75 9.25 10.75H8.75C7.23079 10.75 6 9.51921 6 8V2.552C6 1.93919 6.32096 1.32466 6.912 1.0161Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Nail;

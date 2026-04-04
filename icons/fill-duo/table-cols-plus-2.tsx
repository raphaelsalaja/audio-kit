import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColsPlus2({
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
          d="M4.25 2C2.7334 2 1.5 3.23 1.5 4.75V13.25C1.5 14.77 2.7334 16 4.25 16H6.5V2H4.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.5 14.75C9.5 13.5947 10.3784 12.6514 11.5 12.5254V2H6.5V16H9.88101C9.64081 15.6421 9.5 15.2124 9.5 14.75Z"
          fill={fill}
        />
        <path
          d="M11.75 12.5H12V12.25C12 11.0093 13.0098 10 14.25 10C15.4902 10 16.5 11.0093 16.5 12.25V4.75C16.5 3.23 15.2666 2 13.75 2H11.5V12.5254C11.5831 12.5161 11.6644 12.5 11.75 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.75 14H15V12.25C15 11.84 14.664 11.5 14.25 11.5C13.836 11.5 13.5 11.84 13.5 12.25V14H11.75C11.336 14 11 14.34 11 14.75C11 15.16 11.336 15.5 11.75 15.5H13.5V17.25C13.5 17.66 13.836 18 14.25 18C14.664 18 15 17.66 15 17.25V15.5H16.75C17.164 15.5 17.5 15.16 17.5 14.75C17.5 14.34 17.164 14 16.75 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColsPlus2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowsPlus2({
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
          d="M16.5 4.75C16.5 3.23 15.267 2 13.75 2H4.25C2.733 2 1.5 3.23 1.5 4.75V6.5H16.5V4.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.25 9.5C15.4047 9.5 16.3483 10.3779 16.4747 11.5H16.5V6.5H1.5V11.5H12.0253C12.1516 10.3779 13.0953 9.5 14.25 9.5Z"
          fill={fill}
        />
        <path
          d="M16.75 13.5H15V11.75C15 11.34 14.664 11 14.25 11C13.836 11 13.5 11.34 13.5 11.75V13.5H11.75C11.336 13.5 11 13.84 11 14.25C11 14.66 11.336 15 11.75 15H13.5V16.75C13.5 17.16 13.836 17.5 14.25 17.5C14.664 17.5 15 17.16 15 16.75V15H16.75C17.164 15 17.5 14.66 17.5 14.25C17.5 13.84 17.164 13.5 16.75 13.5Z"
          fill={fill}
        />
        <path
          d="M16.4999 11.75V11.5H16.4746C16.4839 11.583 16.4999 11.6646 16.4999 11.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.5 14.25C9.5 13.0093 10.5098 12 11.75 12H12V11.75C12 11.6646 12.016 11.583 12.0253 11.5H1.5V13.25C1.5 14.77 2.733 16 4.25 16H10.3535C9.83759 15.5874 9.5 14.9604 9.5 14.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableRowsPlus2;

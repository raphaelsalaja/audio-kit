import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewTop2({
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
          d="M6.50012 5H8.25012V6.75C8.25012 7.1641 8.58602 7.5 9.00012 7.5C9.41422 7.5 9.75012 7.1641 9.75012 6.75V5H11.5001C11.9142 5 12.2501 4.6641 12.2501 4.25C12.2501 3.8359 11.9142 3.5 11.5001 3.5H9.75012V1.75C9.75012 1.3359 9.41422 1 9.00012 1C8.58602 1 8.25012 1.3359 8.25012 1.75V3.5H6.50012C6.08602 3.5 5.75012 3.8359 5.75012 4.25C5.75012 4.6641 6.08602 5 6.50012 5Z"
          fill={fill}
        />
        <path
          d="M14.7501 9H3.25012C2.00748 9 1.00012 10.0074 1.00012 11.25V12.75C1.00012 13.9926 2.00748 15 3.25012 15H14.7501C15.9928 15 17.0001 13.9926 17.0001 12.75V11.25C17.0001 10.0074 15.9928 9 14.7501 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableRowNewTop2;

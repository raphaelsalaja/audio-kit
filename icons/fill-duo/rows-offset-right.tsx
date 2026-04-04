import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RowsOffsetRight({
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
          d="M9.75012 7H2.75012C1.78362 7 1.00012 7.7835 1.00012 8.75V9.25C1.00012 10.2165 1.78362 11 2.75012 11H9.75012C10.7166 11 11.5001 10.2165 11.5001 9.25V8.75C11.5001 7.7835 10.7166 7 9.75012 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75012 1.5H2.75012C1.78362 1.5 1.00012 2.2835 1.00012 3.25V3.75C1.00012 4.7165 1.78362 5.5 2.75012 5.5H9.75012C10.7166 5.5 11.5001 4.7165 11.5001 3.75V3.25C11.5001 2.2835 10.7166 1.5 9.75012 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75012 12.5H2.75012C1.78362 12.5 1.00012 13.2835 1.00012 14.25V14.75C1.00012 15.7165 1.78362 16.5 2.75012 16.5H9.75012C10.7166 16.5 11.5001 15.7165 11.5001 14.75V14.25C11.5001 13.2835 10.7166 12.5 9.75012 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.7804 8.46975L14.2804 5.96975C13.9874 5.67675 13.5128 5.67675 13.2199 5.96975C12.927 6.26275 12.9269 6.73727 13.2199 7.03017L15.1896 8.9999L13.2199 10.9696C12.9269 11.2626 12.9269 11.7373 13.2199 12.0302C13.3664 12.1767 13.5578 12.2498 13.7502 12.2498C13.9426 12.2498 14.134 12.1767 14.2805 12.0302L16.7805 9.53017C17.0735 9.23717 17.0734 8.76265 16.7804 8.46975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RowsOffsetRight;

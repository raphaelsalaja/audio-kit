import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RowsOffsetLeft({
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
          d="M15.2501 7H8.25012C7.28362 7 6.50012 7.7835 6.50012 8.75V9.25C6.50012 10.2165 7.28362 11 8.25012 11H15.2501C16.2166 11 17.0001 10.2165 17.0001 9.25V8.75C17.0001 7.7835 16.2166 7 15.2501 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 1.5H8.25012C7.28362 1.5 6.50012 2.2835 6.50012 3.25V3.75C6.50012 4.7165 7.28362 5.5 8.25012 5.5H15.2501C16.2166 5.5 17.0001 4.7165 17.0001 3.75V3.25C17.0001 2.2835 16.2166 1.5 15.2501 1.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 12.5H8.25012C7.28362 12.5 6.50012 13.2835 6.50012 14.25V14.75C6.50012 15.7165 7.28362 16.5 8.25012 16.5H15.2501C16.2166 16.5 17.0001 15.7165 17.0001 14.75V14.25C17.0001 13.2835 16.2166 12.5 15.2501 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.78037 5.96975C4.48737 5.67675 4.01277 5.67675 3.71987 5.96975L1.21987 8.46975C0.926872 8.76275 0.926872 9.23727 1.21987 9.53017L3.71987 12.0302C3.86637 12.1767 4.05828 12.2499 4.25018 12.2499C4.44208 12.2499 4.63398 12.1767 4.78048 12.0302C5.07348 11.7372 5.07348 11.2626 4.78048 10.9697L2.81078 9.00002L4.78048 7.0303C5.07348 6.7373 5.07337 6.26265 4.78037 5.96975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RowsOffsetLeft;

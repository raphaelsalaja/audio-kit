import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewTop({
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
          d="M6.5 2.5C6.09 2.5 5.75 2.836 5.75 3.25C5.75 3.664 6.09 4 6.5 4H8.25V5.75C8.25 6.164 8.59 6.5 9 6.5C9.41 6.5 9.75 6.164 9.75 5.75V4H11.5C11.91 4 12.25 3.664 12.25 3.25C12.25 2.836 11.91 2.5 11.5 2.5H9.75V0.75C9.75 0.336 9.41 0 9 0C8.59 0 8.25 0.336 8.25 0.75V2.5H6.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16 13.2499V4.99994C16 4.15614 15.6157 3.37007 14.9458 2.84467C14.6201 2.58877 14.1484 2.64542 13.8931 2.97162C13.6363 3.29582 13.6959 3.76956 14.0202 4.02436C14.3254 4.26366 14.5001 4.61904 14.5001 4.99994V8.99994H3.50015V4.99994C3.50015 4.61904 3.67495 4.26366 3.98015 4.02436C4.30535 3.76946 4.36493 3.29582 4.10713 2.97162C3.85173 2.64542 3.38004 2.58887 3.05444 2.84467C2.38454 3.37007 2.00024 4.15614 2.00024 4.99994V13.2499C2.00024 14.7665 3.23366 15.9999 4.75026 15.9999H13.2503C14.7669 15.9999 16 14.7665 16 13.2499Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowNewTop;

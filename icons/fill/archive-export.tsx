import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveExport({
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
          d="M5.96999 5.78002C6.26299 6.07302 6.73799 6.07302 7.03099 5.78002L8.25099 4.56002V8.24902C8.25099 8.66302 8.58699 8.99902 9.00099 8.99902C9.41499 8.99902 9.75099 8.66302 9.75099 8.24902V4.56002L10.971 5.78002C11.117 5.92602 11.309 6.00002 11.501 6.00002C11.693 6.00002 11.885 5.92702 12.031 5.78002C12.324 5.48702 12.324 5.01202 12.031 4.71902L9.53099 2.21902C9.23799 1.92602 8.76299 1.92602 8.46999 2.21902L5.96999 4.71902C5.67699 5.01202 5.67699 5.48702 5.96999 5.78002Z"
          fill={secondaryfill}
        />
        <path
          d="M3.5 4.75C3.5 4.05921 4.05921 3.5 4.75 3.5C5.16421 3.5 5.5 3.16421 5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C3.23079 2 2 3.23079 2 4.75V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V4.75C16 3.23079 14.7692 2 13.25 2C12.8358 2 12.5 2.33579 12.5 2.75C12.5 3.16421 12.8358 3.5 13.25 3.5C13.9408 3.5 14.5 4.05921 14.5 4.75V9.5H11.75C11.336 9.5 11 9.836 11 10.25V11.75C11 11.888 10.888 12 10.75 12H7.25C7.112 12 7 11.888 7 11.75V10.25C7 9.836 6.664 9.5 6.25 9.5H3.5V4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveExport;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GasPump({
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
          d="M16.4084 3.64086C16.2101 3.27722 15.7545 3.14324 15.3909 3.34159C15.0272 3.53994 14.8932 3.99552 15.0916 4.35915L16.1283 6.25982C15.772 6.31794 15.5 6.62721 15.5 7V8.75C15.5 9.16421 15.8358 9.5 16.25 9.5H16.5148L16.5208 10.5228C16.5197 11.3503 15.8485 12.0208 15.0208 12.0208C14.1924 12.0208 13.5208 11.3492 13.5208 10.5208C13.5208 10.1066 13.185 9.7708 12.7708 9.7708C12.3566 9.7708 12.0208 10.1066 12.0208 10.5208C12.0208 12.1776 13.364 13.5208 15.0208 13.5208C16.6776 13.5208 18.0208 12.1776 18.0208 10.5208L18 7.00253C17.9996 6.71044 17.9261 6.42319 17.7863 6.16695L16.4084 3.64086Z"
          fill={secondaryfill}
        />
        <path
          d="M14.5 15H13.5V4.25C13.5 2.733 12.267 1.5 10.75 1.5H5.75001C4.23301 1.5 3.00001 2.733 3.00001 4.25V15H2.003C1.589 15 1.253 15.336 1.253 15.75C1.253 16.164 1.589 16.5 2.003 16.5H14.5C14.914 16.5 15.25 16.164 15.25 15.75C15.25 15.336 14.914 15 14.5 15ZM5.75001 3H10.75C11.439 3 12 3.561 12 4.25V8H4.50001V4.25C4.50001 3.561 5.06101 3 5.75001 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GasPump;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColNewRight({
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
          d="M15.5 6.5C15.5 6.09 15.164 5.75 14.75 5.75C14.336 5.75 14 6.09 14 6.5V8.25H12.25C11.836 8.25 11.5 8.59 11.5 9C11.5 9.41 11.836 9.75 12.25 9.75H14V11.5C14 11.91 14.336 12.25 14.75 12.25C15.164 12.25 15.5 11.91 15.5 11.5V9.75H17.25C17.664 9.75 18 9.41 18 9C18 8.59 17.664 8.25 17.25 8.25H15.5V6.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 16H13C13.8438 16 14.6299 15.6157 15.1553 14.9458C15.4112 14.6201 15.3545 14.1484 15.0283 13.8931C14.7041 13.6363 14.2304 13.6958 13.9756 14.0201C13.7363 14.3253 13.3809 14.5001 13 14.5001H9V3.50012H13C13.3809 3.50012 13.7363 3.6749 13.9756 3.9801C14.2305 4.3053 14.7041 4.36486 15.0283 4.10706C15.3545 3.85166 15.4111 3.38004 15.1553 3.05444C14.6299 2.38454 13.8438 2.00024 13 2.00024H4.75C3.2334 2.00024 2 3.23364 2 4.75024V13.2502C2 14.7668 3.2334 16 4.75 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColNewRight;

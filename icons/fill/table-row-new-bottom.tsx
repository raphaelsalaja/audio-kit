import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewBottom({
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
          d="M11.5 15.5C11.91 15.5 12.25 15.164 12.25 14.75C12.25 14.336 11.91 14 11.5 14H9.75V12.25C9.75 11.836 9.41 11.5 9 11.5C8.59 11.5 8.25 11.836 8.25 12.25V14H6.5C6.09 14 5.75 14.336 5.75 14.75C5.75 15.164 6.09 15.5 6.5 15.5H8.25V17.25C8.25 17.664 8.59 18 9 18C9.41 18 9.75 17.664 9.75 17.25V15.5H11.5Z"
          fill={secondaryfill}
        />
        <path
          d="M1.99995 4.75V13C1.99995 13.8438 2.38425 14.6299 3.05415 15.1553C3.37985 15.4112 3.85156 15.3545 4.10686 15.0283C4.36366 14.7041 4.30416 14.2304 3.97986 13.9756C3.67466 13.7363 3.49985 13.3809 3.49985 13V9H14.4998V13C14.4998 13.3809 14.3251 13.7363 14.0199 13.9756C13.6947 14.2305 13.6351 14.7041 13.8929 15.0283C14.1483 15.3545 14.62 15.4111 14.9456 15.1553C15.6155 14.6299 15.9998 13.8438 15.9998 13V4.75C15.9998 3.2334 14.7664 2 13.2498 2H4.74976C3.23316 2 1.99995 3.2334 1.99995 4.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowNewBottom;

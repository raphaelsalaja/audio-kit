import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowShare({
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
          d="M8.9206 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H17V4.75C17 3.23 15.767 2 14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H8.9206C9.3346 16 9.6706 15.6602 9.6706 15.25C9.6706 14.8398 9.3346 14.5 8.9206 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
        <path
          d="M16.25 11H12.75C12.336 11 12 11.34 12 11.75C12 12.16 12.336 12.5 12.75 12.5H14.439L11.219 15.72C10.926 16.01 10.926 16.4901 11.219 16.7802C11.365 16.9302 11.557 17.0001 11.749 17.0001C11.941 17.0001 12.133 16.9303 12.279 16.7802L15.499 13.5601V15.25C15.499 15.66 15.835 16 16.249 16C16.663 16 16.999 15.66 16.999 15.25V11.75C16.999 11.34 16.664 11 16.25 11Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowShare;

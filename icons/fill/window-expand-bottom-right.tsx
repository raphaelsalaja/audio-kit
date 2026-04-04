import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandBottomRight({
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
          d="M10 2.75C10 3.1641 10.3359 3.5 10.75 3.5H13.25C13.9395 3.5 14.5 4.0605 14.5 4.75V13.25C14.5 13.9395 13.9395 14.5 13.25 14.5H4.75C4.0605 14.5 3.5 13.9395 3.5 13.25V10.75C3.5 10.3359 3.1641 10 2.75 10C2.3359 10 2 10.3359 2 10.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V4.75C16 3.2334 14.7666 2 13.25 2H10.75C10.3359 2 10 2.3359 10 2.75Z"
          fill={fill}
        />
        <path
          d="M6.25 2H4.75C3.23122 2 2 3.23122 2 4.75V6.25C2 7.76878 3.23122 9 4.75 9H6.25C7.76878 9 9 7.76878 9 6.25V4.75C9 3.23122 7.76878 2 6.25 2Z"
          fill={secondaryfill}
        />
        <path
          d="M8.96979 8.96973C8.67679 9.26273 8.67679 9.73725 8.96979 10.0302L10.4395 11.4999H9.25C8.8359 11.4999 8.5 11.8358 8.5 12.2499C8.5 12.664 8.8359 12.9999 9.25 12.9999H12.25C12.6641 12.9999 13 12.664 13 12.2499V9.24988C13 8.83578 12.6641 8.49988 12.25 8.49988C11.8359 8.49988 11.5 8.83578 11.5 9.24988V10.4395L10.0303 8.96973C9.7373 8.67673 9.26269 8.67673 8.96979 8.96973Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandBottomRight;

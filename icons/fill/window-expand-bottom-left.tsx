import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandBottomLeft({
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
          d="M15.25 10C14.8359 10 14.5 10.3359 14.5 10.75V13.25C14.5 13.9395 13.9395 14.5 13.25 14.5H4.75C4.0605 14.5 3.5 13.9395 3.5 13.25V4.75C3.5 4.0605 4.0605 3.5 4.75 3.5H7.25C7.6641 3.5 8 3.1641 8 2.75C8 2.3359 7.6641 2 7.25 2H4.75C3.2334 2 2 3.2334 2 4.75V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25V10.75C16 10.3359 15.6641 10 15.25 10Z"
          fill={fill}
        />
        <path
          d="M13.25 2H11.75C10.2312 2 9 3.23122 9 4.75V6.25C9 7.76878 10.2312 9 11.75 9H13.25C14.7688 9 16 7.76878 16 6.25V4.75C16 3.23122 14.7688 2 13.25 2Z"
          fill={secondaryfill}
        />
        <path
          d="M9.0302 8.96973C8.7372 8.67673 8.2626 8.67673 7.9697 8.96973L6.5 10.4395V9.24988C6.5 8.83578 6.1641 8.49988 5.75 8.49988C5.3359 8.49988 5 8.83578 5 9.24988V12.2499C5 12.664 5.3359 12.9999 5.75 12.9999H8.75C9.1641 12.9999 9.5 12.664 9.5 12.2499C9.5 11.8358 9.1641 11.4999 8.75 11.4999H7.56049L9.0302 10.0302C9.3232 9.73715 9.3232 9.26263 9.0302 8.96973Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandBottomLeft;

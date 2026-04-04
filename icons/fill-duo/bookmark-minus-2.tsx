import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkMinus2({
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
          d="M11.75 10.5C10.5093 10.5 9.5 9.4907 9.5 8.25C9.5 7.0093 10.5093 6 11.75 6H15V3.75C15 2.2334 13.7666 1 12.25 1H5.75C4.2334 1 3 2.2334 3 3.75V16.25C3 16.5264 3.1523 16.7808 3.396 16.9111C3.6401 17.0424 3.9365 17.0273 4.166 16.874L9 13.6513L13.834 16.874C13.9595 16.9575 14.1045 17 14.25 17C14.3716 17 14.4932 16.9707 14.604 16.9111C14.8477 16.7807 15 16.5263 15 16.25V10.5H11.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.75 9H11.75C11.3359 9 11 8.6641 11 8.25C11 7.8359 11.3359 7.5 11.75 7.5H16.75C17.1641 7.5 17.5 7.8359 17.5 8.25C17.5 8.6641 17.1641 9 16.75 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookmarkMinus2;

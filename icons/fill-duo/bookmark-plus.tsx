import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkPlus({
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
          d="M14.25 17C14.1045 17 13.9595 16.9575 13.834 16.874L9 13.6513L4.166 16.874C3.9365 17.0273 3.6401 17.0425 3.396 16.9111C3.1523 16.7807 3 16.5263 3 16.25V3.75C3 2.2334 4.2334 1 5.75 1H12.25C13.7666 1 15 2.2334 15 3.75V16.25C15 16.5264 14.8477 16.7808 14.604 16.9111C14.4932 16.9707 14.3716 17 14.25 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.5 6.5H9.75V4.75C9.75 4.3359 9.4141 4 9 4C8.5859 4 8.25 4.3359 8.25 4.75V6.5H6.5C6.0859 6.5 5.75 6.8359 5.75 7.25C5.75 7.6641 6.0859 8 6.5 8H8.25V9.75C8.25 10.1641 8.5859 10.5 9 10.5C9.4141 10.5 9.75 10.1641 9.75 9.75V8H11.5C11.9141 8 12.25 7.6641 12.25 7.25C12.25 6.8359 11.9141 6.5 11.5 6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookmarkPlus;

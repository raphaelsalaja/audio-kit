import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkCheck({
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
          d="M14.25 17C14.1045 17 13.9595 16.9575 13.834 16.874L9 13.6513L4.166 16.874C3.9365 17.0273 3.6396 17.0425 3.396 16.9111C3.1523 16.7807 3 16.5263 3 16.25V3.75C3 2.2334 4.2334 1 5.75 1H12.25C13.7666 1 15 2.2334 15 3.75V16.25C15 16.5264 14.8477 16.7808 14.604 16.9111C14.4932 16.9707 14.3716 17 14.25 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.10602 10.25C7.91702 10.25 7.73392 10.1787 7.59482 10.0483L5.98592 8.5483C5.68272 8.2661 5.66612 7.7915 5.94882 7.4887C6.23152 7.1855 6.70562 7.1694 7.00842 7.4516L8.00892 8.3837L10.9044 4.5483C11.1544 4.2182 11.6251 4.1528 11.9547 4.4013C12.2853 4.6508 12.3512 5.121 12.1017 5.4516L8.70472 9.9516C8.57682 10.1215 8.38292 10.2285 8.17102 10.247C8.14952 10.249 8.12742 10.25 8.10602 10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookmarkCheck;

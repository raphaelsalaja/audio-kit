import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageDepthSparkle({
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
          d="M10.194 6.846L5.921 12.658C5.435 13.318 5.907 14.25 6.727 14.25H15.273C16.093 14.25 16.564 13.318 16.079 12.658L11.806 6.846C11.406 6.303 10.593 6.303 10.194 6.846Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.194 6.846L5.921 12.658C5.435 13.318 5.907 14.25 6.727 14.25H15.273C16.093 14.25 16.564 13.318 16.079 12.658L11.806 6.846C11.406 6.303 10.593 6.303 10.194 6.846Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.731 10.195L5.603 7.31601C5.303 6.91001 4.697 6.91001 4.397 7.31601L1.634 11.054C1.268 11.549 1.622 12.25 2.237 12.25H6.221"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.90799 3.00801L8.64499 2.58701L8.22399 1.32401C8.08699 0.916005 7.41199 0.916005 7.27499 1.32401L6.85399 2.58701L5.59099 3.00801C5.38699 3.07601 5.24899 3.26701 5.24899 3.48201C5.24899 3.69701 5.38699 3.88801 5.59099 3.95601L6.85399 4.37701L7.27499 5.64001C7.34299 5.84401 7.53499 5.98201 7.74999 5.98201C7.96499 5.98201 8.15599 5.84401 8.22499 5.64001L8.64599 4.37701L9.90899 3.95601C10.113 3.88801 10.251 3.69701 10.251 3.48201C10.251 3.26701 10.113 3.07601 9.90899 3.00801H9.90799Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ImageDepthSparkle;

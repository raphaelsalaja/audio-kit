import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageDepth({
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
          d="M7.75 2C7.061 2 6.5 2.561 6.5 3.25C6.5 3.939 7.061 4.5 7.75 4.5C8.439 4.5 9 3.939 9 3.25C9 2.561 8.439 2 7.75 2Z"
          fill={fill}
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
      </g>
    </svg>
  );
}

export default ImageDepth;

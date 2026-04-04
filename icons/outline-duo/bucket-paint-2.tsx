import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BucketPaint2({
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
          d="M15.2213 4.71664C15.0211 5.46937 13.7883 6.11222 12.039 6.463C11.578 6.555 11.25 6.968 11.25 7.438V9.999C11.25 10.689 10.69 11.249 10 11.249C9.31 11.249 8.75 10.689 8.75 9.999V7.702C8.75 7.183 8.352 6.743 7.834 6.708C5.1327 6.52505 3.04477 5.71741 2.77869 4.7169L4 13.95C4 14.944 6.239 15.75 9 15.75C11.761 15.75 14 14.944 14 13.95L15.2213 4.71664Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 4.5L4 13.95C4 14.944 6.239 15.75 9 15.75C11.761 15.75 14 14.944 14 13.95L15.25 4.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 4.5C15.25 3.257 12.452 2.25 9 2.25C5.548 2.25 2.75 3.257 2.75 4.5C2.75 5.599 4.94 6.512 7.834 6.708C8.352 6.743 8.75 7.183 8.75 7.702V9.999C8.75 10.689 9.31 11.249 10 11.249C10.69 11.249 11.25 10.689 11.25 9.999V7.438C11.25 6.968 11.578 6.555 12.039 6.463C13.954 6.079 15.25 5.345 15.25 4.5Z"
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

export default BucketPaint2;

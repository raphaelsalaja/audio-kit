import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateAnticlockwise({
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
          d="M3.75 16.5C5.26878 16.5 6.5 15.2688 6.5 13.75C6.5 12.2312 5.26878 11 3.75 11C2.23122 11 1 12.2312 1 13.75C1 15.2688 2.23122 16.5 3.75 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 1C6.52 1 4.235 2.156 2.739 4.042L2.62301 3.202C2.56601 2.791 2.19001 2.502 1.77701 2.562C1.36701 2.619 1.08001 2.997 1.13701 3.408L1.545 6.353C1.597 6.728 1.91801 7 2.28701 7C2.32101 7 2.356 6.998 2.391 6.993L5.335 6.586C5.746 6.529 6.032 6.15 5.976 5.74C5.918 5.329 5.535 5.046 5.13 5.099L3.672 5.301C4.872 3.574 6.846 2.5 9.001 2.5C12.585 2.5 15.501 5.416 15.501 9C15.501 12.584 12.585 15.5 9.001 15.5C8.701 15.5 8.399 15.479 8.103 15.438C7.693 15.388 7.31401 15.668 7.25801 16.079C7.20201 16.489 7.48801 16.868 7.89901 16.924C8.26201 16.974 8.633 16.999 9.001 16.999C13.412 16.999 17.001 13.41 17.001 8.999C17.001 4.588 13.411 1 9 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDotRotateAnticlockwise;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDotRotateClockwise({
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
          d="M14.25 16.5C15.7688 16.5 17 15.2688 17 13.75C17 12.2312 15.7688 11 14.25 11C12.7312 11 11.5 12.2312 11.5 13.75C11.5 15.2688 12.7312 16.5 14.25 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.898 15.438C9.602 15.479 9.3 15.5 9 15.5C5.416 15.5 2.5 12.584 2.5 9C2.5 5.416 5.416 2.5 9 2.5C11.154 2.5 13.128 3.574 14.329 5.301L12.871 5.099C12.459 5.046 12.082 5.329 12.025 5.74C11.968 6.151 12.255 6.529 12.666 6.586L15.61 6.993C15.645 6.997 15.679 7 15.714 7C16.083 7 16.404 6.728 16.456 6.353L16.864 3.408C16.921 2.997 16.635 2.619 16.224 2.562C15.809 2.502 15.435 2.792 15.378 3.202L15.262 4.042C13.766 2.156 11.481 1 9.001 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C9.368 17 9.739 16.975 10.102 16.925C10.513 16.868 10.799 16.49 10.743 16.08C10.686 15.669 10.306 15.387 9.898 15.438Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDotRotateClockwise;

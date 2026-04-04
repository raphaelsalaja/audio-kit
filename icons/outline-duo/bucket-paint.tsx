import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BucketPaint({
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
          d="M14 14.45L15.25 6.5C15.25 6.5 14.782 7.21041 14 7.81696C13.218 8.42351 10.8138 8.89527 9 8.89527C7.18621 8.89527 5.13067 8.69309 4.28824 8.08654C3.44581 7.47998 2.75 6.5 2.75 6.5L4 14.45C4.2118 15.4529 6.239 16.25 9 16.25C11.761 16.25 13.7882 15.4529 14 14.45Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 6.0833C10.104 6.0833 11 5.1753 11 4.054C11 2.5127 9.8787 1.854 9 0.75C8.1213 1.854 7 2.5127 7 4.054C7 5.1753 7.896 6.0833 9 6.0833Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 6.5L14 14.45C13.7882 15.4529 11.761 16.25 9 16.25C6.239 16.25 4.2118 15.4529 4 14.45L2.75 6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.0833C10.104 6.0833 11 5.1753 11 4.054C11 2.5127 9.8787 1.854 9 0.75C8.1213 1.854 7 2.5127 7 4.054C7 5.1753 7.896 6.0833 9 6.0833Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.4473 4.9191C14.562 5.3256 15.25 5.8837 15.25 6.5C15.25 7.743 12.452 8.75 9 8.75C5.548 8.75 2.75 7.743 2.75 6.5C2.75 5.8837 3.43801 5.3256 4.55251 4.9192"
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

export default BucketPaint;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipHorizontal({
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
          d="M2.583 5.49597L6.083 8.62797C6.305 8.82697 6.305 9.17397 6.083 9.37297L2.583 12.505C2.261 12.793 1.75 12.565 1.75 12.132V5.86797C1.75 5.43597 2.261 5.20797 2.583 5.49597Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 3.5C9.41421 3.5 9.75 3.16421 9.75 2.75C9.75 2.33579 9.41421 2 9 2C8.58579 2 8.25 2.33579 8.25 2.75C8.25 3.16421 8.58579 3.5 9 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 6.625C9.41421 6.625 9.75 6.28921 9.75 5.875C9.75 5.46079 9.41421 5.125 9 5.125C8.58579 5.125 8.25 5.46079 8.25 5.875C8.25 6.28921 8.58579 6.625 9 6.625Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 12.875C9.41421 12.875 9.75 12.5392 9.75 12.125C9.75 11.7108 9.41421 11.375 9 11.375C8.58579 11.375 8.25 11.7108 8.25 12.125C8.25 12.5392 8.58579 12.875 9 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16C9.41421 16 9.75 15.6642 9.75 15.25C9.75 14.8358 9.41421 14.5 9 14.5C8.58579 14.5 8.25 14.8358 8.25 15.25C8.25 15.6642 8.58579 16 9 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.583 5.49597L6.083 8.62797C6.305 8.82697 6.305 9.17397 6.083 9.37297L2.583 12.505C2.261 12.793 1.75 12.565 1.75 12.132V5.86797C1.75 5.43597 2.261 5.20797 2.583 5.49597Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.417 5.49597L11.917 8.62797C11.695 8.82697 11.695 9.17397 11.917 9.37297L15.417 12.505C15.739 12.793 16.25 12.565 16.25 12.132V5.86797C16.25 5.43597 15.739 5.20797 15.417 5.49597Z"
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

export default FlipHorizontal;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenNib({
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
          d="M5.976 14.75L3.734 9.882C3.589 9.566 3.618 9.198 3.811 8.909L8.376 2.069C8.673 1.624 9.327 1.624 9.624 2.069L14.19 8.908C14.383 9.197 14.412 9.566 14.267 9.881L12.025 14.749"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.735V9.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.976 14.75L3.734 9.882C3.589 9.566 3.618 9.198 3.811 8.909L8.376 2.069C8.673 1.624 9.327 1.624 9.624 2.069L14.19 8.908C14.383 9.197 14.412 9.566 14.267 9.881L12.025 14.749"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 16.25V15.75C3.75 15.198 4.198 14.75 4.75 14.75H13.25C13.802 14.75 14.25 15.198 14.25 15.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.25C9.41421 10.25 9.75 9.91421 9.75 9.5C9.75 9.08579 9.41421 8.75 9 8.75C8.58579 8.75 8.25 9.08579 8.25 9.5C8.25 9.91421 8.58579 10.25 9 10.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PenNib;

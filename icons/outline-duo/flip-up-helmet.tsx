import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipUpHelmet({
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
          d="M7.64999 15.75H12.51C14.2985 15.75 15.75 14.2985 15.75 12.51V12.128H8.51235L6.84495 7.97311L7.50097 6.7135H15.3521C14.4142 4.11219 11.9225 2.25 9 2.25C5.2751 2.25 2.25 5.2751 2.25 9V10.35C2.25 13.3308 4.66919 15.75 7.64999 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.3651 6.75H7.9714C7.285 6.75 6.8026 7.4257 7.0257 8.0749L8.22821 11.5749C8.36701 11.9788 8.74689 12.25 9.17389 12.25H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.51 15.75H7.64999C4.66919 15.75 2.25 13.3308 2.25 10.35V9C2.25 5.2751 5.2751 2.25 9 2.25C12.7249 2.25 15.75 5.2751 15.75 9V12.51C15.75 14.2985 14.2985 15.75 12.51 15.75Z"
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

export default FlipUpHelmet;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceX({
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
          d="M16.25 8.24999H12.5605L14.5302 6.28029C14.8232 5.98729 14.8232 5.51267 14.5302 5.21977C14.2372 4.92687 13.7626 4.92677 13.4697 5.21977L10.2197 8.46977C9.92669 8.76277 9.92669 9.23739 10.2197 9.53029L13.4697 12.7803C13.6162 12.9268 13.8081 13 14 13C14.1919 13 14.3838 12.9268 14.5303 12.7803C14.8233 12.4873 14.8233 12.0127 14.5303 11.7198L12.5606 9.75008H16.2501C16.6642 9.75008 17.0001 9.41418 17.0001 9.00008C17.0001 8.58598 16.6641 8.24999 16.25 8.24999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.5303 5.21969C4.2373 4.92669 3.7627 4.92669 3.4698 5.21969C3.1769 5.51269 3.1768 5.98731 3.4698 6.28021L5.4395 8.2499H1.75C1.3359 8.2499 1 8.5858 1 8.9999C1 9.414 1.3359 9.7499 1.75 9.7499H5.4395L3.4698 11.7196C3.1768 12.0126 3.1768 12.4872 3.4698 12.7801C3.6163 12.9266 3.8082 12.9998 4.0001 12.9998C4.192 12.9998 4.3839 12.9266 4.5304 12.7801L7.7804 9.53008C8.0734 9.23708 8.0734 8.7625 7.7804 8.4696L4.5303 5.21969Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceX;

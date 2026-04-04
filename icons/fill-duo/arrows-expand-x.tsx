import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsExpandX({
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
          d="M13.5303 5.21969C13.2373 4.92669 12.7627 4.92669 12.4698 5.21969C12.1769 5.51269 12.1768 5.98731 12.4698 6.28021L14.4395 8.2499H10.75C10.3359 8.2499 10 8.5858 10 8.9999C10 9.414 10.3359 9.7499 10.75 9.7499H14.4395L12.4698 11.7196C12.1768 12.0126 12.1768 12.4872 12.4698 12.7801C12.6163 12.9266 12.8082 12.9998 13.0001 12.9998C13.192 12.9998 13.3839 12.9266 13.5304 12.7801L16.7804 9.53008C17.0734 9.23708 17.0734 8.7625 16.7804 8.4696L13.5303 5.21969Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25 8.24999H3.5605L5.5302 6.28029C5.8232 5.98729 5.8232 5.51267 5.5302 5.21977C5.2372 4.92687 4.7626 4.92677 4.4697 5.21977L1.2197 8.46977C0.926704 8.76277 0.926704 9.23739 1.2197 9.53029L4.4697 12.7803C4.6162 12.9268 4.8081 13 5 13C5.1919 13 5.3838 12.9268 5.5303 12.7803C5.8233 12.4873 5.8233 12.0127 5.5303 11.7198L3.5606 9.75008H7.2501C7.6642 9.75008 8.0001 9.41418 8.0001 9.00008C8.0001 8.58598 7.6641 8.24999 7.25 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsExpandX;

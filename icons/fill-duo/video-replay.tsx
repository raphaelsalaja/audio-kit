import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VideoReplay({
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
          d="M9.5 4C9.5 6.757 11.743 9 14.5 9C15.386 9 16.243 8.738 17 8.299V12.75C17 14.267 15.767 15.5 14.25 15.5H5.05H3.75C2.233 15.5 1 14.267 1 12.75V5.75C1 4.233 2.233 3 3.75 3H9.601C9.535 3.323 9.5 3.658 9.5 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.25 0C16.836 0 16.5 0.336 16.5 0.75V1.124C15.928 0.726 15.237 0.5 14.5 0.5C12.57 0.5 11 2.07 11 4C11 5.93 12.57 7.5 14.5 7.5C15.459 7.5 16.387 7.1 17.046 6.401C17.33 6.1 17.317 5.626 17.015 5.341C16.715 5.055 16.24 5.07 15.955 5.371C15.573 5.776 15.056 5.999 14.5 5.999C13.397 5.999 12.5 5.102 12.5 3.999C12.5 2.896 13.397 1.999 14.5 1.999C14.995 1.999 15.441 2.192 15.795 2.499H14.75C14.336 2.499 14 2.835 14 3.249C14 3.663 14.336 3.999 14.75 3.999H17.25C17.664 3.999 18 3.663 18 3.249V0.75C18 0.336 17.664 0 17.25 0Z"
          fill={fill}
        />
        <path
          d="M10.647 10.18L8.296 11.808C8.155 11.906 7.991 11.954 7.827 11.954C7.696 11.954 7.564 11.923 7.443 11.859C7.17 11.716 7 11.436 7 11.128V7.872C7 7.563 7.17 7.283 7.443 7.141C7.717 6.998 8.043 7.018 8.296 7.193L10.648 8.822C10.87 8.975 11.003 9.229 11.003 9.501C11.003 9.773 10.87 10.025 10.647 10.18Z"
          fill={fill}
        />
        <path
          d="M5 16.25C5 15.8358 5.33579 15.5 5.75 15.5H12.25C12.6642 15.5 13 15.8358 13 16.25C13 16.6642 12.6642 17 12.25 17H5.75C5.33579 17 5 16.6642 5 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default VideoReplay;

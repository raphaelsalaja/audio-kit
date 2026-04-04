import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowsReduceY({
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
          d="M9.53029 10.2197C9.23729 9.92669 8.76269 9.92669 8.46979 10.2197L5.21979 13.4697C5.07329 13.6162 5.00009 13.8081 5.00009 14C5.00009 14.1919 5.07329 14.3838 5.21979 14.5303C5.51279 14.8233 5.98739 14.8233 6.28029 14.5303L8.24999 12.5606V16.2501C8.24999 16.6642 8.58589 17.0001 8.99999 17.0001C9.41409 17.0001 9.74999 16.6642 9.74999 16.2501V12.5606L11.7197 14.5303C12.0127 14.8233 12.4873 14.8233 12.7802 14.5303C13.0731 14.2373 13.0732 13.7627 12.7802 13.4698L9.53029 10.2197Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.7197 3.4697L9.74999 5.43939V1.74991C9.74999 1.33581 9.41409 0.999908 8.99999 0.999908C8.58589 0.999908 8.24999 1.33581 8.24999 1.74991V5.43939L6.28029 3.4697C5.98729 3.1767 5.51269 3.1767 5.21979 3.4697C5.07329 3.6162 5.00009 3.8081 5.00009 4C5.00009 4.1919 5.07329 4.3838 5.21979 4.5303L8.46979 7.7803C8.76279 8.0733 9.23739 8.0733 9.53029 7.7803L12.7803 4.5303C13.0733 4.2373 13.0733 3.76269 12.7803 3.46979C12.4873 3.17689 12.0126 3.1767 11.7197 3.4697Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowsReduceY;

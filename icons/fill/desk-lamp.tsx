import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeskLamp({
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
          d="M15.675 3.625C14.311 2.687 12.801 2.82 11.699 2.916C11.194 2.96 10.569 3.015 10.381 2.887L9.14999 2.041C8.40199 1.527 7.37399 1.717 6.86099 2.465L6.28299 3.306C5.76899 4.054 5.95899 5.081 6.70699 5.595L7.93799 6.442C8.12199 6.568 8.28999 7.164 8.42399 7.643C8.72399 8.707 9.13499 10.165 10.523 11.12C10.649 11.206 10.797 11.252 10.948 11.252C10.993 11.252 11.039 11.248 11.085 11.239C11.28 11.203 11.454 11.091 11.566 10.927L15.868 4.67C16.102 4.329 16.016 3.86 15.675 3.625Z"
          fill={fill}
        />
        <path
          d="M5.99576 8.04999C6.30442 7.77376 6.33071 7.29962 6.05448 6.99096C5.77825 6.6823 5.30411 6.656 4.99545 6.93223L3.46694 8.30013C2.7669 8.92666 2.68642 9.99423 3.28487 10.7187L6.40868 14.5H3.74999C3.33578 14.5 2.99999 14.8358 2.99999 15.25C2.99999 15.6642 3.33578 16 3.74999 16H12.25C12.6642 16 13 15.6642 13 15.25C13 14.8358 12.6642 14.5 12.25 14.5H8.35432L4.44131 9.76335C4.35578 9.6598 4.36731 9.50736 4.46725 9.41789L5.99576 8.04999Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default DeskLamp;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTurnDown({
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
          d="M9.75 15.75C9.336 15.75 9 15.414 9 15V4.75C9 4.061 8.439 3.5 7.75 3.5H3.75C3.336 3.5 3 3.164 3 2.75C3 2.336 3.336 2 3.75 2H7.75C9.267 2 10.5 3.233 10.5 4.75V15C10.5 15.414 10.164 15.75 9.75 15.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.74999 16C9.55799 16 9.36599 15.927 9.21999 15.78L4.96999 11.53C4.67699 11.237 4.67699 10.762 4.96999 10.469C5.26299 10.176 5.738 10.176 6.031 10.469L9.751 14.189L13.471 10.469C13.764 10.176 14.239 10.176 14.532 10.469C14.825 10.762 14.825 11.237 14.532 11.53L10.282 15.78C10.136 15.926 9.94399 16 9.75199 16H9.74999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTurnDown;

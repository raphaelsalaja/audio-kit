import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjUpRight({
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
          d="M14.25 2H10.75C9.7835 2 9 2.7835 9 3.75V7.25C9 8.2165 9.7835 9 10.75 9H14.25C15.2165 9 16 8.2165 16 7.25V3.75C16 2.7835 15.2165 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.75 9.5H3.239C2.825 9.5 2.489 9.836 2.489 10.25C2.489 10.664 2.825 11 3.239 11H5.939L2.219 14.72C1.926 15.013 1.926 15.488 2.219 15.781C2.365 15.927 2.557 16.001 2.749 16.001C2.941 16.001 3.133 15.928 3.279 15.781L6.999 12.061V14.761C6.999 15.175 7.335 15.511 7.749 15.511C8.163 15.511 8.499 15.175 8.499 14.761V10.251C8.499 9.83698 8.163 9.50098 7.749 9.50098L7.75 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjUpRight;

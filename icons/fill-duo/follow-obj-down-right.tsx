import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjDownRight({
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
          d="M14.25 9H10.75C9.7835 9 9 9.7835 9 10.75V14.25C9 15.2165 9.7835 16 10.75 16H14.25C15.2165 16 16 15.2165 16 14.25V10.75C16 9.7835 15.2165 9 14.25 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.74999 2.49001C7.33599 2.49001 6.99999 2.82601 6.99999 3.24001V5.94003L3.27999 2.21999C2.98699 1.92699 2.51199 1.92699 2.21899 2.21999C1.92599 2.51299 1.92599 2.98803 2.21899 3.28103L5.93899 7.001H3.23998C2.82598 7.001 2.48998 7.337 2.48998 7.751C2.48998 8.165 2.82598 8.501 3.23998 8.501H7.74999C8.16399 8.501 8.49999 8.165 8.49999 7.751V3.24001C8.49999 2.82601 8.16399 2.49001 7.74999 2.49001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjDownRight;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FollowObjUp({
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
          d="M14.25 2H3.75C2.7835 2 2 2.7835 2 3.75V4.75C2 5.7165 2.7835 6.5 3.75 6.5H14.25C15.2165 6.5 16 5.7165 16 4.75V3.75C16 2.7835 15.2165 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.53001 8.21999C9.23701 7.92699 8.76202 7.92699 8.46902 8.21999L5.21902 11.47C4.92602 11.763 4.92602 12.238 5.21902 12.531C5.51202 12.824 5.98701 12.824 6.28001 12.531L8.25002 10.561V16.25C8.25002 16.664 8.58602 17 9.00002 17C9.41402 17 9.75002 16.664 9.75002 16.25V10.561L11.72 12.531C11.866 12.677 12.058 12.751 12.25 12.751C12.442 12.751 12.634 12.678 12.78 12.531C13.073 12.238 13.073 11.763 12.78 11.47L9.53001 8.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FollowObjUp;

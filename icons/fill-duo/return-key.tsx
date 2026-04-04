import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ReturnKey({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V13.25C1 14.767 2.233 16 3.75 16H14.25C15.767 16 17 14.767 17 13.25V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14 9.25C14 10.215 13.215 11 12.25 11H6.561L7.281 11.72C7.574 12.013 7.574 12.488 7.281 12.781C7.135 12.927 6.943 13.001 6.751 13.001C6.559 13.001 6.367 12.928 6.221 12.781L4.221 10.781C3.928 10.488 3.928 10.013 4.221 9.71997L6.221 7.71997C6.514 7.42697 6.989 7.42697 7.282 7.71997C7.575 8.01297 7.575 8.48801 7.282 8.78101L6.562 9.50098H12.251C12.389 9.50098 12.501 9.38898 12.501 9.25098V7.25098C12.501 7.11298 12.389 7.00098 12.251 7.00098H10.751C10.337 7.00098 10.001 6.66498 10.001 6.25098C10.001 5.83698 10.337 5.50098 10.751 5.50098H12.251C13.216 5.50098 14.001 6.28598 14.001 7.25098V9.25098L14 9.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ReturnKey;

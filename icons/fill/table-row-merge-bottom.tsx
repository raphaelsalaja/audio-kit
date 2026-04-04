import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowMergeBottom({
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
          d="M2 4.75V13C2 13.8477 2.3848 14.6348 3.0557 15.1592C3.3819 15.4141 3.8536 15.3565 4.1084 15.0303C4.3647 14.7051 4.3037 14.2314 3.9795 13.9775C3.6748 13.7392 3.5 13.3829 3.5 13.0001V9.00012H14.5V13.0001C14.5 13.3839 14.3252 13.7403 14.0205 13.9786C13.6943 14.2325 13.6343 14.7061 13.8916 15.0312C14.1465 15.3575 14.6182 15.4151 14.9443 15.1602C15.6152 14.6358 16 13.8487 16 13V4.75C16 3.2334 14.7666 2 13.25 2H4.75C3.2334 2 2 3.2334 2 4.75Z"
          fill={fill}
        />
        <path
          d="M9.52995 17.78L12.03 15.28C12.3199 14.987 12.3199 14.512 12.03 14.219C11.74 13.926 11.26 13.926 10.9699 14.219L9.74986 15.439V11.75C9.74986 11.336 9.40986 11 8.99986 11C8.58986 11 8.24986 11.336 8.24986 11.75V15.439L7.02985 14.219C6.73985 13.926 6.25986 13.926 5.96976 14.219C5.81976 14.365 5.74976 14.557 5.74976 14.749C5.74976 14.941 5.81966 15.1331 5.96976 15.2791L8.46976 17.78C8.75976 18.073 9.23985 18.073 9.52995 17.78Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableRowMergeBottom;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgBubbleUser({
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
          d="M13.25 1.25C11.041 1.25 9.25 3.041 9.25 5.25C9.25 5.978 9.447 6.658 9.787 7.246C10.024 7.691 9.758 8.742 9.25 9.25C9.94 9.287 10.848 8.976 11.254 8.713C11.524 8.869 11.952 9.075 12.512 9.181C12.751 9.226 12.998 9.25 13.25 9.25C15.459 9.25 17.25 7.459 17.25 5.25C17.25 3.041 15.459 1.25 13.25 1.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 1.25C11.041 1.25 9.25 3.041 9.25 5.25C9.25 5.978 9.447 6.658 9.787 7.246C10.024 7.691 9.758 8.742 9.25 9.25C9.94 9.287 10.848 8.976 11.254 8.713C11.524 8.869 11.952 9.075 12.512 9.181C12.751 9.226 12.998 9.25 13.25 9.25C15.459 9.25 17.25 7.459 17.25 5.25C17.25 3.041 15.459 1.25 13.25 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.55099 10.75C5.65556 10.75 6.55099 9.85457 6.55099 8.75C6.55099 7.64543 5.65556 6.75 4.55099 6.75C3.44643 6.75 2.55099 7.64543 2.55099 8.75C2.55099 9.85457 3.44643 10.75 4.55099 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 16C1.275 14.403 2.778 13.25 4.551 13.25C6.324 13.25 7.827 14.403 8.352 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MsgBubbleUser;

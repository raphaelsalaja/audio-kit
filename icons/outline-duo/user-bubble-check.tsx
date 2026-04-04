import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserBubbleCheck({
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
          d="M12.75 1.75C10.265 1.75 8.25 3.764 8.25 6.248C8.25 7.067 8.472 7.831 8.854 8.493C9.121 8.993 8.821 10.175 8.25 10.747C9.026 10.789 10.048 10.439 10.504 10.143C10.808 10.318 11.289 10.55 11.919 10.669C12.188 10.72 12.466 10.747 12.749 10.747C15.234 10.747 17.249 8.733 17.249 6.249C17.249 3.765 15.235 1.75 12.75 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 6.75L12.25 8.25L14.5 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75C10.265 1.75 8.25 3.764 8.25 6.248C8.25 7.067 8.472 7.831 8.854 8.493C9.121 8.993 8.821 10.175 8.25 10.747C9.026 10.789 10.048 10.439 10.504 10.143C10.808 10.318 11.289 10.55 11.919 10.669C12.188 10.72 12.466 10.747 12.749 10.747C15.234 10.747 17.249 8.733 17.249 6.249C17.249 3.765 15.235 1.75 12.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 10.25C4.85457 10.25 5.75 9.35457 5.75 8.25C5.75 7.14543 4.85457 6.25 3.75 6.25C2.64543 6.25 1.75 7.14543 1.75 8.25C1.75 9.35457 2.64543 10.25 3.75 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 15.5C0.75 13.843 2.093 12.5 3.75 12.5C5.407 12.5 6.75 13.843 6.75 15.5"
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

export default UserBubbleCheck;

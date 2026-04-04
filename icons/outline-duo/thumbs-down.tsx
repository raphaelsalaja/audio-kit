import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThumbsDown({
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
          d="M5.25 10.506C5.25 10.986 5.423 11.45 5.736 11.813L10 16.75C10.854 16.323 11.25 15.322 10.92 14.426L9.75 11.25H14.152C15.465 11.25 16.421 10.007 16.085 8.738L14.894 4.238C14.662 3.361 13.868 2.75 12.961 2.75H7.25C6.145 2.75 5.25 3.645 5.25 4.75"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 10.506C5.25 10.986 5.423 11.45 5.736 11.813L10 16.75C10.854 16.323 11.25 15.322 10.92 14.426L9.75 11.25H14.152C15.465 11.25 16.421 10.007 16.085 8.738L14.894 4.238C14.662 3.361 13.868 2.75 12.961 2.75H7.25C6.145 2.75 5.25 3.645 5.25 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V10.25C1.75 10.8023 2.19772 11.25 2.75 11.25H4.25C4.80228 11.25 5.25 10.8023 5.25 10.25V3.75C5.25 3.19772 4.80228 2.75 4.25 2.75Z"
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

export default ThumbsDown;

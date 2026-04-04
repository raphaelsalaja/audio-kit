import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThumbsUp({
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
          d="M5.25 7.494C5.25 7.014 5.423 6.55 5.736 6.187L10 1.25C10.854 1.677 11.25 2.678 10.92 3.574L9.75 6.75H14.152C15.465 6.75 16.421 7.993 16.085 9.262L14.894 13.762C14.662 14.639 13.868 15.25 12.961 15.25H7.25C6.145 15.25 5.25 14.355 5.25 13.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 7.494C5.25 7.014 5.423 6.55 5.736 6.187L10 1.25C10.854 1.677 11.25 2.678 10.92 3.574L9.75 6.75H14.152C15.465 6.75 16.421 7.993 16.085 9.262L14.894 13.762C14.662 14.639 13.868 15.25 12.961 15.25H7.25C6.145 15.25 5.25 14.355 5.25 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 6.75H2.75C2.19772 6.75 1.75 7.19772 1.75 7.75V14.25C1.75 14.8023 2.19772 15.25 2.75 15.25H4.25C4.80228 15.25 5.25 14.8023 5.25 14.25V7.75C5.25 7.19772 4.80228 6.75 4.25 6.75Z"
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

export default ThumbsUp;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaSkipToStart({
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
          d="M9.50002 4.946C8.05402 5.818 4.90002 7.722 3.48902 8.574C3.16702 8.768 3.17102 9.235 3.49302 9.43L9.49502 13.053C9.82702 13.253 10.249 13.013 10.249 12.624V5.377C10.249 4.988 9.83102 4.745 9.49902 4.945L9.50002 4.946Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.5 4.946C15.054 5.818 11.9 7.722 10.489 8.574C10.167 8.768 10.171 9.235 10.493 9.43L16.495 13.053C16.827 13.253 17.249 13.013 17.249 12.624V5.377C17.249 4.988 16.831 4.745 16.499 4.945L16.5 4.946Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.50002 4.946C8.05402 5.818 4.90002 7.722 3.48902 8.574C3.16702 8.768 3.17102 9.235 3.49302 9.43L9.49502 13.053C9.82702 13.253 10.249 13.013 10.249 12.624V5.377C10.249 4.988 9.83102 4.745 9.49902 4.945L9.50002 4.946Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 13.75V4.25"
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

export default MediaSkipToStart;

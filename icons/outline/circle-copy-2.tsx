import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopy2({
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
          d="M8.33618 15.6726C9.06698 16.032 9.88018 16.25 10.75 16.25C13.788 16.25 16.25 13.7881 16.25 10.75C16.25 9.8809 16.0319 9.0676 15.6726 8.3364"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 12.75C10.2876 12.75 12.75 10.288 12.75 7.25C12.75 4.212 10.2876 1.75 7.25 1.75C4.2124 1.75 1.75 4.212 1.75 7.25C1.75 10.288 4.2124 12.75 7.25 12.75Z"
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

export default CircleCopy2;

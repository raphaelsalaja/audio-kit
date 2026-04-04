import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BaloonHeart({
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
          d="M8.302,17.25c-.431-.431-.431-1.13,0-1.56l.375-.379c.431-.431,.431-1.13,0-1.56h0"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.546,13.639c.287,.148,.621,.148,.908,0,1.514-.78,6.296-3.61,6.296-8.211,.007-2.021-1.643-3.666-3.69-3.678-1.231,.016-2.376,.629-3.06,1.64-.684-1.011-1.829-1.624-3.06-1.64-2.047,.012-3.697,1.658-3.69,3.678,0,4.601,4.782,7.43,6.296,8.211Z"
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

export default BaloonHeart;

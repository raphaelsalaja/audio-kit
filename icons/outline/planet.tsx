import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Planet({
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
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="6.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="6.75"
          cy="9.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="9.25"
          cy="6.75"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
        <path
          d="M13.948,2c.931-.332,1.646-.344,2.021,.031,1.1,1.1-1.129,5.111-4.978,8.96-3.849,3.849-7.861,6.078-8.96,4.978-.375-.375-.363-1.09-.031-2.021"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Planet;

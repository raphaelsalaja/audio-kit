import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circles2({
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
          r="1.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="5.995"
          cy="12.005"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle cx="14.127" cy="3.873" fill={fill} r=".75" stroke="none" />
        <path
          d="M9,13.25c2.347,0,4.25-1.903,4.25-4.25s-1.903-4.25-4.25-4.25-4.25,1.903-4.25,4.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.375,2.156c-.745-.259-1.542-.406-2.375-.406C4.996,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25,7.25-3.246,7.25-7.25c0-.833-.148-1.63-.406-2.375"
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

export default Circles2;

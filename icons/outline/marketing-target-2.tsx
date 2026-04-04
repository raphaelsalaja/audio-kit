import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MarketingTarget2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          x1="11"
          x2="8.337"
          y1="11"
          y2="8.337"
        />
        <path
          d="m8.958,3.48c-.613-1.594-2.148-2.73-3.958-2.73C2.653.75.75,2.653.75,5c0,1.81,1.136,3.345,2.731,3.958"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m5.531,4.89l4.891,1.787c.447.163.434.801-.019.946l-2.106.674-.674,2.106c-.145.454-.782.467-.946.019l-1.787-4.891c-.146-.399.242-.787.641-.641Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default MarketingTarget2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader2({
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
      style={{}}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75"
          fill="none"
          stroke="url(#nc-loader-2-outline-gradient-1)"
          strokeWidth="1.5"
        />
        <path
          d="M9 16.25C4.99594 16.25 1.75 13.0041 1.75 9C1.75 4.99594 4.99594 1.75 9 1.75"
          fill="none"
          stroke="url(#nc-loader-2-outline-gradient-2)"
          strokeWidth="1.5"
        />
        <circle cx="9" cy="16.25" fill={secondaryfill} r="0.75" stroke="none" />
        <defs fill="none" stroke="none">
          <linearGradient
            id="nc-loader-2-outline-gradient-1"
            fill="none"
            gradientUnits="userSpaceOnUse"
            stroke="none"
            x1="9"
            x2="9"
            y1="2.5"
            y2="16.25"
          >
            <stop
              fill="none"
              stopColor={fill}
              stopOpacity="0.5"
              stroke="none"
            />
            <stop fill="none" offset="1" stopColor={fill} stroke="none" />
          </linearGradient>
          <linearGradient
            id="nc-loader-2-outline-gradient-2"
            fill="none"
            gradientUnits="userSpaceOnUse"
            stroke="none"
            x1="9"
            x2="9"
            y1="2.5"
            y2="16.25"
          >
            <stop
              fill="none"
              stopColor={fill}
              stopOpacity="0.5"
              stroke="none"
            />
            <stop
              fill="none"
              offset="1"
              stopColor={fill}
              stopOpacity="0"
              stroke="none"
            />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default Loader2;

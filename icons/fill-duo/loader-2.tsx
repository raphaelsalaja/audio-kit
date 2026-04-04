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
          d="M17 9C17 4.58172 13.4183 1 9 1V2.5C12.5899 2.5 15.5 5.41015 15.5 9C15.5 12.5899 12.5899 15.5 9 15.5V17C13.4183 17 17 13.4183 17 9Z"
          fill="url(#nc-loader-2-fill-duo-gradient-1)"
        />
        <path
          d="M2.5 9C2.5 5.41015 5.41015 2.5 9 2.5V1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17V15.5C5.41015 15.5 2.5 12.5899 2.5 9Z"
          fill="url(#nc-loader-2-fill-duo-gradient-2)"
        />
        <circle cx="9" cy="16.25" fill={secondaryfill} r="0.75" />
        <circle cx="9" cy="9" fill={secondaryfill} fillOpacity="0.4" r="5" />
        <defs fill="none">
          <linearGradient
            id="nc-loader-2-fill-duo-gradient-1"
            fill="none"
            gradientUnits="userSpaceOnUse"
            x1="9"
            x2="9"
            y1="2.5"
            y2="16.25"
          >
            <stop fill="none" stopOpacity="0.5" />
            <stop fill="none" offset="1" />
          </linearGradient>
          <linearGradient
            id="nc-loader-2-fill-duo-gradient-2"
            fill="none"
            gradientUnits="userSpaceOnUse"
            x1="9"
            x2="9"
            y1="2.5"
            y2="16.25"
          >
            <stop fill="none" stopColor={fill} stopOpacity="0.5" />
            <stop fill="none" offset="1" stopColor={fill} stopOpacity="0" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}

export default Loader2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicPlus({
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
          d="m13.586,2.1938l-5.2051.8679c.0708.2183.1191.4465.1191.6882,0,1.2407-1.0098,2.25-2.25,2.25h-.25v.25c0,.3606-.0931.6968-.2446.999l8.9946-1.499v-2.5701c0-.6179-.554-1.0879-1.164-.9861Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m8.6399,3.0186l4.9461-.8246c.61-.102,1.164.368,1.164.986v2.57l-9,1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="5.75"
          y1="7.25"
          y2="13.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.75"
          x2="14.75"
          y1="5.75"
          y2="12.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.75"
          x2="3.75"
          y1="1.25"
          y2="6.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.25"
          x2="1.25"
          y1="3.75"
          y2="3.75"
        />
        <circle
          cx="3.75"
          cy="13.75"
          fill={secondaryfill}
          opacity=".3"
          r="2"
          strokeWidth="0"
        />
        <circle
          cx="12.75"
          cy="12.25"
          fill={secondaryfill}
          opacity=".3"
          r="2"
          strokeWidth="0"
        />
        <circle
          cx="3.75"
          cy="13.75"
          fill="none"
          r="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="12.75"
          cy="12.25"
          fill="none"
          r="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MusicPlus;

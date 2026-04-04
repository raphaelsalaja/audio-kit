import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Telescope({
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
          d="m6.75,10.5c0-.9666.7835-1.75,1.75-1.75.5812,0,1.0923.2864,1.4106.7224l2.8643-1.0366-1.7583-4.0886L1.769,9l1.2722,2.9585,3.7201-1.3462c-.0024-.0378-.0113-.0737-.0113-.1123Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="3.3635"
          x2="1.4524"
          y1="12.7081"
          y2="8.2638"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.7539"
          x2="3.0412"
          y1="10.6149"
          y2="11.9585"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.7748"
          x2="9.9147"
          y1="8.4359"
          y2="9.4709"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.769"
          x2="11.0166"
          y1="9"
          y2="4.3472"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.6392"
          x2="5.25"
          y1="12.023"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9.3608"
          x2="11.75"
          y1="12.023"
          y2="16.25"
        />
        <rect
          height="7.662"
          width="3.4262"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          transform="translate(-1.162 5.786) rotate(-23.2694)"
          x="11.7563"
          y="1.8838"
        />
        <circle
          cx="8.5"
          cy="10.5"
          fill="none"
          r="1.75"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Telescope;

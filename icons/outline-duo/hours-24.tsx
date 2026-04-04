import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hours24({
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
          fill={secondaryfill}
          opacity=".3"
          r="7.25"
          strokeWidth="0"
        />
        <path
          d="m3.2193,11.7889c.2826-1.0053,1.2557-1.5546,2.3088-1.5386,1.0518.016,2.0409.4866,2.1035,1.5386s-1.0518,1.7586-2.2062,2.2305c-1.1544.4706-2.1115.9106-2.2062,2.2305h4.415"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.9418,7.3422C2.8574,3.4445,6.7595,1.027,10.6579,1.9419c2.9119.6841,4.9974,3.0351,5.4848,5.8055"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="15.25 14.75 10.25 14.75 10.25 14.4722 13.5 10.25 14 10.25 14 16.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="17.2333 5.0843 16.1626 7.858 13.3896 6.788"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Hours24;

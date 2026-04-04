import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ProgressIndicator2({
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
          d="m9,16.25c4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75,1.75,4.996,1.75,9s3.246,7.25,7.25,7.25Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,9L3.8735,3.8735"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.5513,1.8948c.4681-.0949.9526-.1448,1.4487-.1448,4.0041,0,7.25,3.2459,7.25,7.25s-3.2459,7.25-7.25,7.25S1.75,13.0041,1.75,9c0-2.002.8115-3.8146,2.1235-5.1265"
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

export default ProgressIndicator2;

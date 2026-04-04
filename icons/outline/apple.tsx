import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Apple({
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
          d="M13.964,5.405c-1.595-1.267-3.391-.223-4.909-.223s-3.131-1.107-4.909,.223-1.95,4.687,.025,7.801c1.895,2.989,3.805,1.817,4.886,1.817s2.992,1.174,4.886-1.817c1.973-3.114,1.489-6.639,.021-7.801Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5,.25h0c.276,0,.5,.224,.5,.5h0c0,1.38-1.12,2.5-2.5,2.5h0c-.276,0-.5-.224-.5-.5h0c0-1.38,1.12-2.5,2.5-2.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Apple;

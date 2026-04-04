import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCross({
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
          opacity=".4"
          r="8"
          strokeWidth="0"
        />
        <path
          d="m15.4447,8.1948c-2.9401-.3657-5.2737-2.6995-5.6394-5.6396-.2645-.0327-.532-.0552-.8053-.0552s-.5408.0225-.8053.0552c-.3657,2.9402-2.6993,5.2739-5.6394,5.6396-.0329.2644-.0553.532-.0553.8052s.0224.5408.0553.8052c2.9401.3657,5.2737,2.6995,5.6394,5.6396.2645.0327.532.0552.8053.0552s.5408-.0225.8053-.0552c.3657-2.9402,2.6993-5.2739,5.6394-5.6396.0329-.2644.0553-.532.0553-.8052s-.0224-.5408-.0553-.8052Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleCross;

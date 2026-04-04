import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationBounce({
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
          d="M13.75 3C11.9551 3 10.5 4.45473 10.5 6.25C10.5 8.04527 11.9551 9.5 13.75 9.5C15.5449 9.5 17 8.04527 17 6.25C17 4.45473 15.5449 3 13.75 3Z"
          fill={fill}
        />
        <path
          d="M8.52 7.17403C7.601 7.94003 6.825 8.84503 6.212 9.86303C6.084 10.075 5.964 10.292 5.852 10.513C5.601 9.36303 5.233 8.24303 4.748 7.16103C4.123 5.76803 3.31 4.45903 2.329 3.27203C2.064 2.95103 1.591 2.90803 1.273 3.17103C0.953999 3.43503 0.908999 3.90703 1.172 4.22703C2.066 5.31003 2.809 6.50403 3.378 7.77503C4.288 9.80303 4.75 11.982 4.75 14.249C4.75 14.646 5.061 14.975 5.457 14.998C5.472 14.998 5.486 14.998 5.501 14.998C5.879 14.998 6.202 14.714 6.245 14.333C6.394 13.026 6.827 11.748 7.497 10.634C8.023 9.75903 8.69 8.98203 9.48 8.32403C9.798 8.05903 9.841 7.58603 9.576 7.26803C9.31 6.94803 8.837 6.90703 8.519 7.17203L8.52 7.17403Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default AnimationBounce;

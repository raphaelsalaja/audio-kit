import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudFog({
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
          d="M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H11.25C11.6642 12.5 12 12.8358 12 13.25C12 13.6642 11.6642 14 11.25 14H1.75C1.33579 14 1 13.6642 1 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 16.25C8 15.8358 8.33579 15.5 8.75 15.5H14.25C14.6642 15.5 15 15.8358 15 16.25C15 16.6642 14.6642 17 14.25 17H8.75C8.33579 17 8 16.6642 8 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 13.25C13.5 12.8358 13.8358 12.5 14.25 12.5H16.25C16.6642 12.5 17 12.8358 17 13.25C17 13.6642 16.6642 14 16.25 14H14.25C13.8358 14 13.5 13.6642 13.5 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 16.25C3 15.8358 3.33579 15.5 3.75 15.5H5.75C6.16421 15.5 6.5 15.8358 6.5 16.25C6.5 16.6642 6.16421 17 5.75 17H3.75C3.33579 17 3 16.6642 3 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.12499 6.3958C10.7083 5 12.633 4.724 14.157 5.326C15.869 6.003 16.997 7.64 17 9.499C17 9.77836 16.9745 10.0518 16.9258 10.3172C16.8493 10.7341 16.4604 11 16.0365 11H1.74559C1.35551 11 1.01018 10.724 1.00199 10.334V10.334C0.96499 8.561 2.16899 7.045 3.81399 6.627C3.80299 6.5 3.79799 6.375 3.79799 6.25C3.79799 3.355 6.14399 1 9.02899 1C10.922 1 12.61 2.047 13.523 3.608C11.4118 3.5058 9.37499 5.125 9.12499 6.3958Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CloudFog;

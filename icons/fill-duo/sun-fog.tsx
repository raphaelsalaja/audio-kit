import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SunFog({
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
          d="M1 9.75C1 9.33579 1.33579 9 1.75 9H11.25C11.6642 9 12 9.33579 12 9.75C12 10.1642 11.6642 10.5 11.25 10.5H1.75C1.33579 10.5 1 10.1642 1 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8 12.75C8 12.3358 8.33579 12 8.75 12H14.25C14.6642 12 15 12.3358 15 12.75C15 13.1642 14.6642 13.5 14.25 13.5H8.75C8.33579 13.5 8 13.1642 8 12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 15.75C5 15.3358 5.33579 15 5.75 15H12.25C12.6642 15 13 15.3358 13 15.75C13 16.1642 12.6642 16.5 12.25 16.5H5.75C5.33579 16.5 5 16.1642 5 15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 9.75C13.5 9.33579 13.8358 9 14.25 9H16.25C16.6642 9 17 9.33579 17 9.75C17 10.1642 16.6642 10.5 16.25 10.5H14.25C13.8358 10.5 13.5 10.1642 13.5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 12.75C3 12.3358 3.33579 12 3.75 12H5.75C6.16421 12 6.5 12.3358 6.5 12.75C6.5 13.1642 6.16421 13.5 5.75 13.5H3.75C3.33579 13.5 3 13.1642 3 12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.87851 6.48526C3.46378 3.63976 5.981 1.5 9 1.5C12.019 1.5 14.5363 3.63976 15.1215 6.48526C15.1669 6.70605 15.1106 6.93555 14.9682 7.11026C14.8258 7.28497 14.6123 7.38635 14.3869 7.38635H3.61314C3.38772 7.38635 3.17427 7.28497 3.03183 7.11026C2.8894 6.93555 2.8331 6.70605 2.87851 6.48526Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SunFog;

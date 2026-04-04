import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextScaleX({
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
          d="M4.75 1C4.33579 1 4 1.33579 4 1.75C4 2.16421 4.33579 2.5 4.75 2.5H8.25V11.25C8.25 11.6642 8.58579 12 9 12C9.41421 12 9.75 11.6642 9.75 11.25V2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.28033 11.7197C4.57322 12.0126 4.57322 12.4874 4.28033 12.7803L3.56066 13.5H14.4393L13.7197 12.7803C13.4268 12.4874 13.4268 12.0126 13.7197 11.7197C14.0126 11.4268 14.4874 11.4268 14.7803 11.7197L16.7803 13.7197C17.0732 14.0126 17.0732 14.4874 16.7803 14.7803L14.7803 16.7803C14.4874 17.0732 14.0126 17.0732 13.7197 16.7803C13.4268 16.4874 13.4268 16.0126 13.7197 15.7197L14.4393 15H3.56066L4.28033 15.7197C4.57322 16.0126 4.57322 16.4874 4.28033 16.7803C3.98744 17.0732 3.51256 17.0732 3.21967 16.7803L1.21967 14.7803C0.926777 14.4874 0.926777 14.0126 1.21967 13.7197L3.21967 11.7197C3.51256 11.4268 3.98744 11.4268 4.28033 11.7197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextScaleX;

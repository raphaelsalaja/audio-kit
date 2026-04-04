import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextScaleY({
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
          d="M1.5 4C1.08579 4 0.75 4.33579 0.75 4.75C0.75 5.16421 1.08579 5.5 1.5 5.5H5V14.25C5 14.6642 5.33579 15 5.75 15C6.16421 15 6.5 14.6642 6.5 14.25V5.5H10C10.4142 5.5 10.75 5.16421 10.75 4.75C10.75 4.33579 10.4142 4 10 4H1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.2197 1.21967C14.5126 0.926777 14.9874 0.926777 15.2803 1.21967L17.2803 3.21967C17.5732 3.51256 17.5732 3.98744 17.2803 4.28033C16.9874 4.57322 16.5126 4.57322 16.2197 4.28033L15.5 3.56066V14.4393L16.2197 13.7197C16.5126 13.4268 16.9874 13.4268 17.2803 13.7197C17.5732 14.0126 17.5732 14.4874 17.2803 14.7803L15.2803 16.7803C14.9874 17.0732 14.5126 17.0732 14.2197 16.7803L12.2197 14.7803C11.9268 14.4874 11.9268 14.0126 12.2197 13.7197C12.5126 13.4268 12.9874 13.4268 13.2803 13.7197L14 14.4393V3.56066L13.2803 4.28033C12.9874 4.57322 12.5126 4.57322 12.2197 4.28033C11.9268 3.98744 11.9268 3.51256 12.2197 3.21967L14.2197 1.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextScaleY;

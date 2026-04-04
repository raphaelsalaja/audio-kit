import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ParagraphSpacing({
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
          d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L11.2803 5.21967C11.5732 5.51256 11.5732 5.98744 11.2803 6.28033C10.9874 6.57322 10.5126 6.57322 10.2197 6.28033L9.75 5.81066V9.18934L10.2197 8.71967C10.5126 8.42678 10.9874 8.42678 11.2803 8.71967C11.5732 9.01256 11.5732 9.48744 11.2803 9.78033L9.53033 11.5303C9.23744 11.8232 8.76256 11.8232 8.46967 11.5303L6.71967 9.78033C6.42678 9.48744 6.42678 9.01256 6.71967 8.71967C7.01256 8.42678 7.48744 8.42678 7.78033 8.71967L8.25 9.18934V5.81066L7.78033 6.28033C7.48744 6.57322 7.01256 6.57322 6.71967 6.28033C6.42678 5.98744 6.42678 5.51256 6.71967 5.21967L8.46967 3.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 1.75C2 1.33579 2.33579 1 2.75 1H15.25C15.6642 1 16 1.33579 16 1.75C16 2.16421 15.6642 2.5 15.25 2.5H2.75C2.33579 2.5 2 2.16421 2 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 16.25C2 15.8358 2.33579 15.5 2.75 15.5H15.25C15.6642 15.5 16 15.8358 16 16.25C16 16.6642 15.6642 17 15.25 17H2.75C2.33579 17 2 16.6642 2 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H15.25C15.6642 12.5 16 12.8358 16 13.25C16 13.6642 15.6642 14 15.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ParagraphSpacing;

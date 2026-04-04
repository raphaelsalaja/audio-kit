import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Book2({
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
          d="M6 12.5H15.2541C15.539 12.5 15.7993 12.6614 15.9259 12.9166C15.9663 12.998 15.9908 13.0843 16 13.1716V1.75C16 1.33579 15.6642 1 15.25 1H6V12.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M15.2541 12.5C15.539 12.5 15.7993 12.6614 15.9259 12.9166C16.0526 13.1718 16.0237 13.4767 15.8514 13.7036C15.3938 14.306 15.3376 15.1345 15.8442 15.7924C16.0186 16.0188 16.0492 16.3247 15.923 16.5811C15.7968 16.8376 15.5359 17 15.25 17H4.25C3.00736 17 2 15.9926 2 14.75C2 13.5074 3.00736 12.5 4.25 12.5H15.2541Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.75 5.25C8.75 4.83579 9.08579 4.5 9.5 4.5H13C13.4142 4.5 13.75 4.83579 13.75 5.25C13.75 5.66421 13.4142 6 13 6H9.5C9.08579 6 8.75 5.66421 8.75 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.75 8.25C8.75 7.83579 9.08579 7.5 9.5 7.5H13C13.4142 7.5 13.75 7.83579 13.75 8.25C13.75 8.66421 13.4142 9 13 9H9.5C9.08579 9 8.75 8.66421 8.75 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 1V12.5H4.25C3.00736 12.5 2 13.5074 2 14.75V3.75C2 2.23079 3.23079 1 4.75 1H6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Book2;

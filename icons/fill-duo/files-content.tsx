import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FilesContent({
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
          d="M7.25 3.5C5.73079 3.5 4.5 4.73079 4.5 6.25V14.25C4.5 15.7692 5.73079 17 7.25 17H13.25C14.7692 17 16 15.7692 16 14.25V8.164C16 7.70014 15.816 7.25536 15.4873 6.92667L12.5747 4.01409L12.574 4.0133C12.2449 3.68293 11.7983 3.5 11.336 3.5H7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.5 3.25C1.5 1.73079 2.73079 0.5 4.25 0.5H9.25C10.7692 0.5 12 1.73079 12 3.25V3.63072C11.7908 3.54502 11.5654 3.5 11.336 3.5H7.25C5.73079 3.5 4.5 4.73079 4.5 6.25V14H4.25C2.73079 14 1.5 12.7692 1.5 11.25V3.25Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M7.25 10.75C7.25 10.3358 7.58579 10 8 10H12.25C12.6642 10 13 10.3358 13 10.75C13 11.1642 12.6642 11.5 12.25 11.5H8C7.58579 11.5 7.25 11.1642 7.25 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.25 13.25C7.25 12.8358 7.58579 12.5 8 12.5H12.25C12.6642 12.5 13 12.8358 13 13.25C13 13.6642 12.6642 14 12.25 14H8C7.58579 14 7.25 13.6642 7.25 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.25 8.25C7.25 7.83579 7.58579 7.5 8 7.5H9C9.41421 7.5 9.75 7.83579 9.75 8.25C9.75 8.66421 9.41421 9 9 9H8C7.58579 9 7.25 8.66421 7.25 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 3.50769V7C11.5 7.552 11.948 8 12.5 8H15.9923C15.9543 7.59632 15.7771 7.2164 15.4873 6.92667L12.574 4.0133C12.284 3.7222 11.9028 3.54556 11.5 3.50769Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FilesContent;

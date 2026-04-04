import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileTree({
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
          d="M9 2.75C9 1.78379 9.78379 1 10.75 1H12.75C12.9489 1 13.1397 1.07902 13.2803 1.21967L14.7803 2.71967C14.921 2.86032 15 3.05109 15 3.25V6.75C15 7.71621 14.2162 8.5 13.25 8.5H10.75C9.78379 8.5 9 7.71621 9 6.75V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15 3.5V3.25C15 3.05109 14.921 2.86032 14.7803 2.71967L13.2803 1.21967C13.1397 1.07902 12.9489 1 12.75 1H12.5V2.75C12.5 3.16421 12.8358 3.5 13.25 3.5H15Z"
          fill={fill}
        />
        <path
          d="M9 11.25C9 10.2838 9.78379 9.5 10.75 9.5H12.75C12.9489 9.5 13.1397 9.57902 13.2803 9.71967L14.7803 11.2197C14.921 11.3603 15 11.5511 15 11.75V15.25C15 16.2162 14.2162 17 13.25 17H10.75C9.78379 17 9 16.2162 9 15.25V11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15 12V11.75C15 11.5511 14.921 11.3603 14.7803 11.2197L13.2803 9.71967C13.1397 9.57902 12.9489 9.5 12.75 9.5H12.5V11.25C12.5 11.6642 12.8358 12 13.25 12H15Z"
          fill={fill}
        />
        <path
          d="M4.5 1.75C4.5 1.33579 4.16421 1 3.75 1C3.33579 1 3 1.33579 3 1.75V3V3.75V11.75C3 12.9922 4.00779 14 5.25 14H6.75C7.16421 14 7.5 13.6642 7.5 13.25C7.5 12.8358 7.16421 12.5 6.75 12.5H5.25C4.83621 12.5 4.5 12.1638 4.5 11.75V5.87187C4.73461 5.95484 4.98705 6 5.25 6H6.75C7.16421 6 7.5 5.66421 7.5 5.25C7.5 4.83579 7.16421 4.5 6.75 4.5H5.25C4.83621 4.5 4.5 4.16379 4.5 3.75V3V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileTree;

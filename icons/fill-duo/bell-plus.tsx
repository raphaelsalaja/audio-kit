import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BellPlus({
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
          d="M10.2 15H7.80099C7.64999 15 7.50799 15.068 7.41299 15.185C7.31799 15.302 7.28099 15.456 7.31199 15.603C7.48499 16.425 8.17999 17 9.00099 17C9.82199 17 10.517 16.425 10.69 15.603C10.721 15.456 10.684 15.302 10.589 15.185C10.494 15.068 10.351 15 10.2 15Z"
          fill={fill}
        />
        <path
          d="M14.5 1.25C14.5 0.835786 14.1642 0.5 13.75 0.5C13.3358 0.5 13 0.835786 13 1.25V3H11.25C10.8358 3 10.5 3.33579 10.5 3.75C10.5 4.16421 10.8358 4.5 11.25 4.5H13V6.25C13 6.66421 13.3358 7 13.75 7C14.1642 7 14.5 6.66421 14.5 6.25V4.5H16.25C16.6642 4.5 17 4.16421 17 3.75C17 3.33579 16.6642 3 16.25 3H14.5V1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.2942 1.5C10.5959 1.179 9.81882 1 9 1C5.96279 1 3.5 3.46279 3.5 6.5V10.75C3.5 11.4408 2.94079 12 2.25 12C1.83579 12 1.5 12.3358 1.5 12.75C1.5 13.1642 1.83579 13.5 2.25 13.5H15.75C16.1642 13.5 16.5 13.1642 16.5 12.75C16.5 12.3358 16.1642 12 15.75 12C15.0592 12 14.5 11.4408 14.5 10.75V8.37197C14.2654 8.45488 14.013 8.5 13.75 8.5C12.5074 8.5 11.5 7.49264 11.5 6.25V6H11.25C10.0074 6 9 4.99264 9 3.75C9 2.50736 10.0074 1.5 11.25 1.5H11.2942Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default BellPlus;

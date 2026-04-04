import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Diet({
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
          d="M1 3.75C1 2.23079 2.23079 1 3.75 1H12.25C13.7692 1 15 2.23079 15 3.75V7.50433C13.5521 7.57964 12.3609 8.62842 12.0687 10.0082C11.4221 9.98055 10.6602 10.1086 9.89952 10.6776C8.90726 11.4199 8.51567 12.6018 8.50113 13.7054C8.48694 14.782 8.8161 15.9347 9.45918 17H3.75C2.23079 17 1 15.7692 1 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4 5.25C4 4.83579 4.33579 4.5 4.75 4.5H5.25C5.66421 4.5 6 4.83579 6 5.25C6 5.66421 5.66421 6 5.25 6H4.75C4.33579 6 4 5.66421 4 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 5.25C7 4.83579 7.33579 4.5 7.75 4.5H11.25C11.6642 4.5 12 4.83579 12 5.25C12 5.66421 11.6642 6 11.25 6H7.75C7.33579 6 7 5.66421 7 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 8.25C4 7.83579 4.33579 7.5 4.75 7.5H5.25C5.66421 7.5 6 7.83579 6 8.25C6 8.66421 5.66421 9 5.25 9H4.75C4.33579 9 4 8.66421 4 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 11.25C4 10.8358 4.33579 10.5 4.75 10.5H5.25C5.66421 10.5 6 10.8358 6 11.25C6 11.6642 5.66421 12 5.25 12H4.75C4.33579 12 4 11.6642 4 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 8.25C7 7.83579 7.33579 7.5 7.75 7.5H11.25C11.6642 7.5 12 7.83579 12 8.25C12 8.66421 11.6642 9 11.25 9H7.75C7.33579 9 7 8.66421 7 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.408 11.8788C15.496 11.1548 14.47 11.7508 13.603 11.7508C12.736 11.7508 11.814 11.1188 10.798 11.8788C9.78201 12.6388 9.684 14.5568 10.812 16.3358C11.895 18.0438 12.987 17.3738 13.604 17.3738C14.221 17.3738 15.313 18.0448 16.396 16.3358C17.523 14.5568 17.247 12.5418 16.408 11.8788Z"
          fill={fill}
        />
        <path
          d="M15.167 9C15.351 9 15.5 9.149 15.5 9.333C15.5 10.253 14.753 11 13.833 11C13.649 11 13.5 10.851 13.5 10.667C13.5 9.747 14.247 9 15.167 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Diet;

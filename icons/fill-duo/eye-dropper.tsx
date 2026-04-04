import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeDropper({
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
          d="M8.87535 5.37531L2.76835 11.4823C2.70884 11.5418 2.65159 11.6032 2.59678 11.6662L2.59602 11.667C2.14951 12.1135 1.89111 12.7531 1.83824 13.3796C1.77695 14.106 2.02333 14.8287 2.59797 15.4026C3.0971 15.9016 3.75973 16.178 4.46502 16.178C5.17102 16.178 5.83402 15.903 6.33302 15.404L12.5166 9.21812L8.87535 5.37531Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.14025 14.7995C2.25848 15.013 2.41081 15.2157 2.59797 15.4027C2.78454 15.5892 2.98687 15.7415 3.20009 15.8601L2.28033 16.7803C1.98743 17.0732 1.51256 17.0732 1.21967 16.7803C0.926776 16.4874 0.926778 16.0125 1.21967 15.7196L2.14025 14.7995Z"
          fill={fill}
        />
        <path
          d="M15.651 2.348C14.653 1.35 12.912 1.35 11.914 2.348L9.41099 4.851L8.27999 3.72C7.98699 3.427 7.51199 3.427 7.21899 3.72C6.92599 4.013 6.92599 4.488 7.21899 4.781L13.219 10.781C13.365 10.927 13.557 11.001 13.749 11.001C13.941 11.001 14.133 10.928 14.279 10.781C14.572 10.488 14.572 10.013 14.279 9.72L13.148 8.589L15.65 6.087C16.68 5.057 16.68 3.379 15.65 2.349L15.651 2.348Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EyeDropper;

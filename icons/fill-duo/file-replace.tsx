import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileReplace({
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
          d="M1.5 2.75C1.5 1.78379 2.28379 1 3.25 1H7.25C7.44891 1 7.63968 1.07902 7.78033 1.21967L9.78033 3.21967C9.92098 3.36032 10 3.55109 10 3.75V5H9.75C7.95536 5 6.5 6.45536 6.5 8.25V11.5H3.25C2.28379 11.5 1.5 10.7162 1.5 9.75V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8 8.25C8 7.28379 8.78379 6.5 9.75 6.5H13.75C13.9489 6.5 14.1397 6.57902 14.2803 6.71967L16.2803 8.71967C16.421 8.86032 16.5 9.05109 16.5 9.25V15.25C16.5 16.2162 15.7162 17 14.75 17H9.75C8.78379 17 8 16.2162 8 15.25V8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10 4H7.75C7.33579 4 7 3.66421 7 3.25V1L7.25 1C7.44891 1 7.63968 1.07902 7.78033 1.21967L9.78033 3.21967C9.92098 3.36032 10 3.55109 10 3.75V4Z"
          fill={fill}
        />
        <path
          d="M3.25 12.5C3.66421 12.5 4 12.8358 4 13.25C4 14.4928 5.00721 15.5 6.25 15.5C6.66421 15.5 7 15.8358 7 16.25C7 16.6642 6.66421 17 6.25 17C4.17879 17 2.5 15.3212 2.5 13.25C2.5 12.8358 2.83579 12.5 3.25 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 1.75C11 1.33579 11.3358 1 11.75 1C13.8212 1 15.5 2.67879 15.5 4.75C15.5 5.16421 15.1642 5.5 14.75 5.5C14.3358 5.5 14 5.16421 14 4.75C14 3.50721 12.9928 2.5 11.75 2.5C11.3358 2.5 11 2.16421 11 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 9.5H14.25C13.8358 9.5 13.5 9.16421 13.5 8.75V6.5H13.75C13.9489 6.5 14.1397 6.57902 14.2803 6.71967L16.2803 8.71967C16.421 8.86032 16.5 9.05109 16.5 9.25V9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileReplace;

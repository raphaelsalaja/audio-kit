import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Frame2({
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
          d="M4.75 1C5.16421 1 5.5 1.33579 5.5 1.75V16.25C5.5 16.6642 5.16421 17 4.75 17C4.33579 17 4 16.6642 4 16.25V1.75C4 1.33579 4.33579 1 4.75 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.25 1C13.6642 1 14 1.33579 14 1.75V16.25C14 16.6642 13.6642 17 13.25 17C12.8358 17 12.5 16.6642 12.5 16.25V1.75C12.5 1.33579 12.8358 1 13.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 4.75C1 4.33579 1.33579 4 1.75 4H16.25C16.6642 4 17 4.33579 17 4.75C17 5.16421 16.6642 5.5 16.25 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 13.25C1 12.8358 1.33579 12.5 1.75 12.5H16.25C16.6642 12.5 17 12.8358 17 13.25C17 13.6642 16.6642 14 16.25 14H1.75C1.33579 14 1 13.6642 1 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Frame2;

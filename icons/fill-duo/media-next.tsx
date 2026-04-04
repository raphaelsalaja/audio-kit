import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaNext({
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
          d="M2 4.43002C2 3.18293 3.3451 2.42989 4.41308 3.02076L12.6673 7.59088C13.7764 8.206 13.7788 9.79421 12.6673 10.4092L4.41329 14.9792C3.34466 15.5704 2 14.8154 2 13.57V4.43002Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.25 2C15.6642 2 16 2.33579 16 2.75V15.25C16 15.6642 15.6642 16 15.25 16C14.8358 16 14.5 15.6642 14.5 15.25V2.75C14.5 2.33579 14.8358 2 15.25 2Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaNext;

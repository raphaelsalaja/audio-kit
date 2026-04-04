import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPrevious({
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
          d="M13.5869 3.02075C14.6555 2.42952 16 3.18464 16 4.43V13.57C16 14.8171 14.6549 15.5701 13.5869 14.9793L5.33366 10.4091C4.2246 9.79402 4.22217 8.20585 5.33366 7.59088L13.5869 3.02075Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MediaPrevious;

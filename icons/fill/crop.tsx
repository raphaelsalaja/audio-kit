import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crop({
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
          d="M7 4.75C7 4.33579 7.33579 4 7.75 4H12.25C13.2162 4 14 4.78379 14 5.75V16.25C14 16.6642 13.6642 17 13.25 17C12.8358 17 12.5 16.6642 12.5 16.25V5.75C12.5 5.61221 12.3878 5.5 12.25 5.5H7.75C7.33579 5.5 7 5.16421 7 4.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 5.5H1.75C1.336 5.5 1 5.164 1 4.75C1 4.336 1.336 4 1.75 4H4.75C5.164 4 5.5 4.336 5.5 4.75C5.5 5.164 5.164 5.5 4.75 5.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.25 14H5.75C4.785 14 4 13.215 4 12.25V1.75C4 1.336 4.336 1 4.75 1C5.164 1 5.5 1.336 5.5 1.75V12.25C5.5 12.388 5.612 12.5 5.75 12.5H16.25C16.664 12.5 17 12.836 17 13.25C17 13.664 16.664 14 16.25 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Crop;

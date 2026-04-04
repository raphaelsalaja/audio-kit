import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjX({
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
          d="M4.75 16C3.23079 16 2 14.7692 2 13.25L2 4.75C2 3.23079 3.23079 2 4.75 2L6.25 2C6.66421 2 7 2.33579 7 2.75L7 15.25C7 15.6642 6.66421 16 6.25 16L4.75 16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.75 16C11.3358 16 11 15.6642 11 15.25L11 2.75C11 2.33579 11.3358 2 11.75 2L13.25 2C14.7692 2 16 3.23079 16 4.75L16 13.25C16 14.7692 14.7692 16 13.25 16L11.75 16Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 17C8.58579 17 8.25 16.6642 8.25 16.25L8.25 1.75C8.25 1.33579 8.58579 1 9 1C9.41421 1 9.75 1.33579 9.75 1.75L9.75 16.25C9.75 16.6642 9.41421 17 9 17Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MirrorObjX;

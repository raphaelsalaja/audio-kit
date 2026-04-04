import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Text({
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
          d="M3.75 2C3.33579 2 3 2.33579 3 2.75C3 3.16421 3.33579 3.5 3.75 3.5H8.25V15.25C8.25 15.6642 8.58579 16 9 16C9.41421 16 9.75 15.6642 9.75 15.25V3.5H14.25C14.6642 3.5 15 3.16421 15 2.75C15 2.33579 14.6642 2 14.25 2H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Text;

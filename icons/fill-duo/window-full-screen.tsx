import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowFullScreen({
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
          d="M14.2501 15.5H3.75009C2.23349 15.5 1.00009 14.2666 1.00009 12.75V5.25C1.00009 3.7334 2.23349 2.5 3.75009 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 5H4.25009C3.83588 5 3.50009 5.33579 3.50009 5.75V12.25C3.50009 12.6642 3.83588 13 4.25009 13H13.7501C14.1643 13 14.5001 12.6642 14.5001 12.25V5.75C14.5001 5.33579 14.1643 5 13.7501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowFullScreen;

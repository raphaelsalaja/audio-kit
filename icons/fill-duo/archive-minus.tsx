import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveMinus({
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
          d="M4.75 2C3.23054 2 2 3.23203 2 4.75V11.25C2 11.6642 2.33579 12 2.75 12H5.5V14.5H12.5V12H15.25C15.6642 12 16 11.6642 16 11.25V6.5H11.25C10.0074 6.5 9 5.49264 9 4.25C9 3.00736 10.0074 2 11.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M10.5 4.25C10.5 3.83579 10.8358 3.5 11.25 3.5H16.25C16.6642 3.5 17 3.83579 17 4.25C17 4.66421 16.6642 5 16.25 5H11.25C10.8358 5 10.5 4.66421 10.5 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveMinus;

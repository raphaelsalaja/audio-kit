import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scarf({
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
          d="M6.5 4H2.75C1.78379 4 1 4.78379 1 5.75V9.75C1 10.7162 1.78379 11.5 2.75 11.5H6.5V4Z"
          fill={fill}
        />
        <path
          d="M8.25 2C7.28379 2 6.5 2.78379 6.5 3.75V15.25C6.5 15.6642 6.83579 16 7.25 16C7.66421 16 8 15.6642 8 15.25V14H9.5V15.25C9.5 15.6642 9.83579 16 10.25 16C10.6642 16 11 15.6642 11 15.25V14H12.5V15.25C12.5 15.6642 12.8358 16 13.25 16C13.6642 16 14 15.6642 14 15.25V3.75C14 2.78379 13.2162 2 12.25 2H8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14 11.5H15.25C16.2162 11.5 17 10.7162 17 9.75V5.75C17 4.78379 16.2162 4 15.25 4H14V11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Scarf;

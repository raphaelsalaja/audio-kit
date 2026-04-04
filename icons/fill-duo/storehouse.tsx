import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Storehouse({
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
          d="M1 4.75C1 3.78379 1.78379 3 2.75 3H15.25C16.2162 3 17 3.78379 17 4.75V14.25C17 14.6642 16.6642 15 16.25 15H1.75C1.33579 15 1 14.6642 1 14.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 7H5.75C5.33579 7 5 7.33579 5 7.75V14.25C5 14.6642 5.33579 15 5.75 15H8.25V7Z"
          fill={fill}
        />
        <path
          d="M9.75 15H12.25C12.6642 15 13 14.6642 13 14.25V7.75C13 7.33579 12.6642 7 12.25 7H9.75V15Z"
          fill={fill}
        />
        <path
          d="M0.25 14.25C0.25 13.8358 0.585786 13.5 1 13.5H17C17.4142 13.5 17.75 13.8358 17.75 14.25C17.75 14.6642 17.4142 15 17 15H1C0.585786 15 0.25 14.6642 0.25 14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Storehouse;

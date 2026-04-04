import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2DistributeVertical({
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
          d="M3 7.75C3 6.78334 3.78393 6 4.75 6H13.25C14.2161 6 15 6.78334 15 7.75V10.25C15 11.2167 14.2161 12 13.25 12H4.75C3.78393 12 3 11.2167 3 10.25V7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align2DistributeVertical;

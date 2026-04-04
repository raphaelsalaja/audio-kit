import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align2DistributeHorizontal({
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
          d="M6 4.75C6 3.78334 6.78393 3 7.75 3H10.25C11.2161 3 12 3.78334 12 4.75V13.25C12 14.2167 11.2161 15 10.25 15H7.75C6.78393 15 6 14.2167 6 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2.75 1C3.16421 1 3.5 1.33579 3.5 1.75V16.25C3.5 16.6642 3.16421 17 2.75 17C2.33579 17 2 16.6642 2 16.25V1.75C2 1.33579 2.33579 1 2.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.25 1C15.6642 1 16 1.33579 16 1.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V1.75C14.5 1.33579 14.8358 1 15.25 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align2DistributeHorizontal;

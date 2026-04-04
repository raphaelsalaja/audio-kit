import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortDown({
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
          d="M13.273 11.241C13.069 10.784 12.631 10.5 12.131 10.5H5.868C5.368 10.5 4.93001 10.784 4.72601 11.241C4.52301 11.698 4.603 12.212 4.937 12.584L8.06801 16.084C8.30501 16.349 8.64501 16.501 9.00001 16.501C9.35501 16.501 9.69401 16.35 9.93201 16.084L13.063 12.585C13.397 12.212 13.476 11.698 13.273 11.241Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SortDown;

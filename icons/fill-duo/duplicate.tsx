import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Duplicate({
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
          d="M13.75 4.5H7.25C5.73122 4.5 4.5 5.73122 4.5 7.25V13.75C4.5 15.2688 5.73122 16.5 7.25 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.25C16.5 5.73122 15.2688 4.5 13.75 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.50001 13.75V7.24999C4.50001 5.73339 5.7334 4.49999 7.25 4.49999H13.0542L12.8998 3.4609C12.6769 1.9609 11.2757 0.922078 9.7755 1.14498L3.3461 2.10009C1.846 2.32299 0.807211 3.72438 1.03011 5.22438L1.98531 11.6538C2.17881 12.956 3.261 13.908 4.5244 13.9912C4.5173 13.9106 4.50001 13.8325 4.50001 13.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Duplicate;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Empty({
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
          d="M5.90247 15.2795C8.51823 16.5701 11.7726 16.1269 13.9497 13.9498C16.1268 11.7727 16.5701 8.51826 15.2795 5.9025L5.90247 15.2795Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.05025 4.05024C6.7839 1.3166 11.2161 1.3166 13.9497 4.05024L4.05025 13.9497C1.31661 11.2161 1.31661 6.78389 4.05025 4.05024Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Empty;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Apple({
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
          d="M13.964 5.405C12.369 4.138 10.573 5.182 9.055 5.182C7.537 5.182 5.924 4.075 4.146 5.405C2.368 6.735 2.196 10.092 4.171 13.206C6.066 16.195 7.976 15.023 9.057 15.023C10.138 15.023 12.049 16.197 13.943 13.206C15.916 10.092 15.432 6.567 13.964 5.405Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.964 5.405C12.369 4.138 10.573 5.182 9.055 5.182C7.537 5.182 5.924 4.075 4.146 5.405C2.368 6.735 2.196 10.092 4.171 13.206C6.066 16.195 7.976 15.023 9.057 15.023C10.138 15.023 12.049 16.197 13.943 13.206C15.916 10.092 15.432 6.567 13.964 5.405Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 0.25C11.776 0.25 12 0.474 12 0.75C12 2.13 10.88 3.25 9.5 3.25C9.224 3.25 9 3.026 9 2.75C9 1.37 10.12 0.25 11.5 0.25Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Apple;

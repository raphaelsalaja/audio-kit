import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layers({
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
          d="M2.58 6.149L8.385 1.949C8.752 1.683 9.249 1.683 9.616 1.949L15.421 6.149C16 6.568 16 7.431 15.421 7.85L9.616 12.05C9.249 12.316 8.752 12.316 8.385 12.05L2.58 7.851C2.001 7.432 2.001 6.568 2.58 6.149Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.58 6.149L8.385 1.949C8.752 1.683 9.249 1.683 9.616 1.949L15.421 6.149C16 6.568 16 7.431 15.421 7.85L9.616 12.05C9.249 12.316 8.752 12.316 8.385 12.05L2.58 7.851C2.001 7.432 2.001 6.568 2.58 6.149Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.746 10.533C15.963 10.972 15.855 11.536 15.42 11.85L9.615 16.05C9.431 16.183 9.215 16.249 9 16.249C8.784 16.249 8.568 16.183 8.385 16.05L2.58 11.851C2.146 11.537 2.037 10.973 2.254 10.534"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Layers;

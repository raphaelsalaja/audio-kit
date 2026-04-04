import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenPlus({
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
          d="M5 1.75C5 1.33579 4.66421 1 4.25 1C3.83579 1 3.5 1.33579 3.5 1.75V3.5H1.75C1.33579 3.5 1 3.83579 1 4.25C1 4.66421 1.33579 5 1.75 5H3.5V6.75C3.5 7.16421 3.83579 7.5 4.25 7.5C4.66421 7.5 5 7.16421 5 6.75V5H6.75C7.16421 5 7.5 4.66421 7.5 4.25C7.5 3.83579 7.16421 3.5 6.75 3.5H5V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.9127 3.34825L4.10375 11.1572C3.24075 12.0212 2.70275 14.5633 2.51075 15.6163C2.46675 15.8583 2.54475 16.1073 2.71875 16.2812C2.86075 16.4233 3.05175 16.5012 3.24875 16.5012C3.29275 16.5012 3.33775 16.4973 3.38275 16.4893C4.43575 16.2983 6.97775 15.7602 7.84175 14.8962L15.6508 7.08725C16.6808 6.05625 16.6808 4.38025 15.6508 3.34925C14.6528 2.35125 12.9107 2.35125 11.9127 3.34825Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PenPlus;

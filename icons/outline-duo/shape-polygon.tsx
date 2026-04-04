import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapePolygon({
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
          d="M7.91199 2.13301L2.90399 6.15401C2.37199 6.58101 2.13699 7.28001 2.30199 7.94401L3.79199 13.925C3.98599 14.704 4.68299 15.25 5.48199 15.25H12.518C13.317 15.25 14.014 14.704 14.208 13.925L15.698 7.94401C15.863 7.28101 15.628 6.58101 15.096 6.15401L10.088 2.13301C9.45199 1.62201 8.54799 1.62201 7.91099 2.13301H7.91199Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.91199 2.13301L2.90399 6.15401C2.37199 6.58101 2.13699 7.28001 2.30199 7.94401L3.79199 13.925C3.98599 14.704 4.68299 15.25 5.48199 15.25H12.518C13.317 15.25 14.014 14.704 14.208 13.925L15.698 7.94401C15.863 7.28101 15.628 6.58101 15.096 6.15401L10.088 2.13301C9.45199 1.62201 8.54799 1.62201 7.91099 2.13301H7.91199Z"
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

export default ShapePolygon;

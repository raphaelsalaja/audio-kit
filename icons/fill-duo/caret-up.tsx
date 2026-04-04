import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUp({
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
          d="M10.478 3.38898C10.155 2.87998 9.60299 2.57703 8.99999 2.57703C8.39699 2.57703 7.84499 2.88098 7.52199 3.38898L2.497 11.313C2.156 11.852 2.13497 12.535 2.44197 13.094C2.74897 13.653 3.33699 14 3.97499 14H14.024C14.662 14 15.25 13.653 15.557 13.094C15.864 12.535 15.844 11.852 15.502 11.313L10.478 3.38898Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretUp;

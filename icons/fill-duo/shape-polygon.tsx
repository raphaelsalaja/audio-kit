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
          d="M7.44266 1.54799C8.35366 0.817193 9.64713 0.816731 10.5577 1.54835L15.5654 5.5691C16.3264 6.17995 16.6611 7.17942 16.4258 8.12511L14.9358 14.1062C14.6589 15.2176 13.6632 16 12.518 16H5.48197C4.33676 16 3.34102 15.2177 3.06421 14.1063L1.57421 8.12528C1.339 7.17872 1.67346 6.18001 2.43441 5.56918L7.44266 1.54799Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ShapePolygon;

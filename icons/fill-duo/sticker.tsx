import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sticker({
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
          d="M9 1C4.58152 1 1 4.58606 1 9C1 13.4139 4.58152 17 9 17C9.18067 17 9.38072 17.0035 9.54993 16.9346C10.586 16.5126 12.3277 15.6657 13.9975 14.0012C15.2625 12.7355 16.2688 11.2099 16.9334 9.54857C17 9.38193 17 9.18284 17 9.00462V9C17 4.58606 13.4185 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.9255 9.56822L16.237 9.27002C15.556 8.94002 14.804 8.75 14 8.75C11.101 8.75 8.75 11.1 8.75 14C8.75 14.8 8.945 15.56 9.267 16.24L9.57746 16.9233C10.6167 16.4976 12.3424 15.651 13.9975 14.0012L13.9992 13.9995C15.6572 12.3362 16.5068 10.6101 16.9255 9.56822Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sticker;

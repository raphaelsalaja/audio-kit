import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopy2({
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
          d="M7.00009 13C10.3138 13 13.0001 10.3137 13.0001 7C13.0001 3.68629 10.3138 1 7.00009 1C3.68638 1 1.00009 3.68629 1.00009 7C1.00009 10.3137 3.68638 13 7.00009 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.0001 7.00001C13.0001 10.3137 10.3138 13 7.0001 13C6.39393 13 5.80875 12.9101 5.25717 12.7429C6.0039 15.2066 8.29256 17 11.0001 17C14.3138 17 17.0001 14.3137 17.0001 11C17.0001 8.29247 15.2067 6.00381 12.743 5.25708C12.9102 5.80866 13.0001 6.39384 13.0001 7.00001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCopy2;

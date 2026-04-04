import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Figure({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M4 12.0001L11.941 2.4176L11.2314 2.68372L2 11.1796L4 12.0001Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 22V16L22 11V17L12 22Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 2.5V21.8117" stroke={fill} />
        <path
          d="M2 11L11.5528 15.7764C11.8343 15.9172 12.1657 15.9172 12.4472 15.7764L22 11"
          stroke={fill}
        />
        <path
          d="M2.33104 10.7021L11.331 2.60207C11.7113 2.25979 12.2887 2.25979 12.669 2.60207L21.669 10.7021C21.8797 10.8917 22 11.1619 22 11.4454V16.382C22 16.7607 21.786 17.107 21.4472 17.2764L12.6708 21.6646C12.2485 21.8757 11.7515 21.8757 11.3292 21.6646L2.55279 17.2764C2.214 17.107 2 16.7607 2 16.382V11.4454C2 11.1619 2.12032 10.8917 2.33104 10.7021Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Figure;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BarsFilter({
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
          d="M12.7501 9.75H5.25009C4.83599 9.75 4.50009 9.4141 4.50009 9C4.50009 8.5859 4.83599 8.25 5.25009 8.25H12.7501C13.1642 8.25 13.5001 8.5859 13.5001 9C13.5001 9.4141 13.1642 9.75 12.7501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 5H2.75009C2.33599 5 2.00009 4.6641 2.00009 4.25C2.00009 3.8359 2.33599 3.5 2.75009 3.5H15.2501C15.6642 3.5 16.0001 3.8359 16.0001 4.25C16.0001 4.6641 15.6642 5 15.2501 5Z"
          fill={fill}
        />
        <path
          d="M10.0001 14.5H8.00009C7.58599 14.5 7.25009 14.1641 7.25009 13.75C7.25009 13.3359 7.58599 13 8.00009 13H10.0001C10.4142 13 10.7501 13.3359 10.7501 13.75C10.7501 14.1641 10.4142 14.5 10.0001 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BarsFilter;

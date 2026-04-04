import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid2x2({
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
          d="M15.7501 9.75H2.25009C1.83599 9.75 1.50009 9.4141 1.50009 9C1.50009 8.5859 1.83599 8.25 2.25009 8.25H15.7501C16.1642 8.25 16.5001 8.5859 16.5001 9C16.5001 9.4141 16.1642 9.75 15.7501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 16.5C8.58599 16.5 8.25009 16.1641 8.25009 15.75V2.25C8.25009 1.8359 8.58599 1.5 9.00009 1.5C9.41419 1.5 9.75009 1.8359 9.75009 2.25V15.75C9.75009 16.1641 9.41419 16.5 9.00009 16.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Grid2x2;

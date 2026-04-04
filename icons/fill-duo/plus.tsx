import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plus({
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
          d="M14.7501 9.75H3.25009C2.83599 9.75 2.50009 9.4141 2.50009 9C2.50009 8.5859 2.83599 8.25 3.25009 8.25H14.7501C15.1642 8.25 15.5001 8.5859 15.5001 9C15.5001 9.4141 15.1642 9.75 14.7501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 15.5C8.58599 15.5 8.25009 15.1641 8.25009 14.75V3.25C8.25009 2.8359 8.58599 2.5 9.00009 2.5C9.41419 2.5 9.75009 2.8359 9.75009 3.25V14.75C9.75009 15.1641 9.41419 15.5 9.00009 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Plus;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight2({
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
          d="M14.2501 2H3.75009C2.23131 2 1.00009 3.23122 1.00009 4.75V13.25C1.00009 14.7688 2.23131 16 3.75009 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 4.5H10.7501C10.3359 4.5 10.0001 4.83579 10.0001 5.25V12.75C10.0001 13.1642 10.3359 13.5 10.7501 13.5H13.7501C14.1643 13.5 14.5001 13.1642 14.5001 12.75V5.25C14.5001 4.83579 14.1643 4.5 13.7501 4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight2;

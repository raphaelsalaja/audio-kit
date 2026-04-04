import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight3({
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
          d="M3.75009 3.5H9.00009C9.41419 3.5 9.75009 3.1641 9.75009 2.75C9.75009 2.3359 9.41419 2 9.00009 2H3.75009C2.23349 2 1.00009 3.2334 1.00009 4.75V13.25C1.00009 14.7666 2.23349 16 3.75009 16H9.00009C9.41419 16 9.75009 15.6641 9.75009 15.25C9.75009 14.8359 9.41419 14.5 9.00009 14.5H3.75009C3.06059 14.5 2.50009 13.9395 2.50009 13.25V4.75C2.50009 4.0605 3.06059 3.5 3.75009 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 2H11.7501C11.336 2 11.0001 2.3359 11.0001 2.75V15.25C11.0001 15.6641 11.336 16 11.7501 16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight3;

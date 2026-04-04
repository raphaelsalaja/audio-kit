import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft3({
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
          d="M14.2501 2H9.00009C8.58599 2 8.25009 2.3359 8.25009 2.75C8.25009 3.1641 8.58599 3.5 9.00009 3.5H14.2501C14.9396 3.5 15.5001 4.0605 15.5001 4.75V13.25C15.5001 13.9395 14.9396 14.5 14.2501 14.5H9.00009C8.58599 14.5 8.25009 14.8359 8.25009 15.25C8.25009 15.6641 8.58599 16 9.00009 16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75009 16H6.25009C6.66419 16 7.00009 15.6641 7.00009 15.25V2.75C7.00009 2.3359 6.66419 2 6.25009 2H3.75009C2.23349 2 1.00009 3.2334 1.00009 4.75V13.25C1.00009 14.7666 2.23349 16 3.75009 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft3;

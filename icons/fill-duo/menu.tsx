import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Menu({
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
          d="M15.7501 8.25H2.25012C1.83602 8.25 1.50012 8.5859 1.50012 9C1.50012 9.4141 1.83602 9.75 2.25012 9.75H15.7501C16.1642 9.75 16.5001 9.4141 16.5001 9C16.5001 8.5859 16.1642 8.25 15.7501 8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 3H2.25012C1.83602 3 1.50012 3.3359 1.50012 3.75C1.50012 4.1641 1.83602 4.5 2.25012 4.5H15.7501C16.1642 4.5 16.5001 4.1641 16.5001 3.75C16.5001 3.3359 16.1642 3 15.7501 3Z"
          fill={fill}
        />
        <path
          d="M15.7501 13.5H2.25012C1.83602 13.5 1.50012 13.8359 1.50012 14.25C1.50012 14.6641 1.83602 15 2.25012 15H15.7501C16.1642 15 16.5001 14.6641 16.5001 14.25C16.5001 13.8359 16.1642 13.5 15.7501 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Menu;

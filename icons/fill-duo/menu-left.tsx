import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MenuLeft({
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
          d="M15.7501 4.5H2.25009C1.83599 4.5 1.50009 4.1641 1.50009 3.75C1.50009 3.3359 1.83599 3 2.25009 3H15.7501C16.1642 3 16.5001 3.3359 16.5001 3.75C16.5001 4.1641 16.1642 4.5 15.7501 4.5Z"
          fill={fill}
        />
        <path
          d="M8.25009 15H2.25009C1.83599 15 1.50009 14.6641 1.50009 14.25C1.50009 13.8359 1.83599 13.5 2.25009 13.5H8.25009C8.66419 13.5 9.00009 13.8359 9.00009 14.25C9.00009 14.6641 8.66419 15 8.25009 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MenuLeft;

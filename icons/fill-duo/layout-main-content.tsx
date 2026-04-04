import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutMainContent({
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
          d="M3.75009 2C2.23349 2 1.00009 3.2334 1.00009 4.75V13.25C1.00009 14.7666 2.23349 16 3.75009 16H8.75009V2H3.75009Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 2H8.25009C6.73131 2 5.50009 3.23122 5.50009 4.75V13.25C5.50009 14.7688 6.73131 16 8.25009 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayoutMainContent;

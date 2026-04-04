import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayoutHeader({
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
          d="M3.75012 16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V5C17.0001 4.5859 16.6642 4.25 16.2501 4.25H1.75012C1.33602 4.25 1.00012 4.5859 1.00012 5V13.25C1.00012 14.7666 2.23352 16 3.75012 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V5.25C1.00012 6.76878 2.23134 8 3.75012 8H14.2501C15.7689 8 17.0001 6.76878 17.0001 5.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayoutHeader;

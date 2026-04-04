import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Menu2({
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
          d="M16.2501 11.5H1.75012C1.33602 11.5 1.00012 11.8359 1.00012 12.25C1.00012 12.6641 1.33602 13 1.75012 13H16.2501C16.6642 13 17.0001 12.6641 17.0001 12.25C17.0001 11.8359 16.6642 11.5 16.2501 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 5H1.75012C1.33602 5 1.00012 5.3359 1.00012 5.75C1.00012 6.1641 1.33602 6.5 1.75012 6.5H16.2501C16.6642 6.5 17.0001 6.1641 17.0001 5.75C17.0001 5.3359 16.6642 5 16.2501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Menu2;

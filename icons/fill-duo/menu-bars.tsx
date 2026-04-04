import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MenuBars({
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
          d="M1.75012 9.75H2.75012C3.16422 9.75 3.50012 9.4141 3.50012 9C3.50012 8.5859 3.16422 8.25 2.75012 8.25H1.75012C1.33602 8.25 1.00012 8.5859 1.00012 9C1.00012 9.4141 1.33602 9.75 1.75012 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 4.5H16.2501C16.6642 4.5 17.0001 4.1641 17.0001 3.75C17.0001 3.3359 16.6642 3 16.2501 3H15.2501C14.836 3 14.5001 3.3359 14.5001 3.75C14.5001 4.1641 14.836 4.5 15.2501 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 13.5H15.2501C14.836 13.5 14.5001 13.8359 14.5001 14.25C14.5001 14.6641 14.836 15 15.2501 15H16.2501C16.6642 15 17.0001 14.6641 17.0001 14.25C17.0001 13.8359 16.6642 13.5 16.2501 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 8.25H5.75012C5.33602 8.25 5.00012 8.5859 5.00012 9C5.00012 9.4141 5.33602 9.75 5.75012 9.75H16.2501C16.6642 9.75 17.0001 9.4141 17.0001 9C17.0001 8.5859 16.6642 8.25 16.2501 8.25Z"
          fill={fill}
        />
        <path
          d="M1.75012 4.5H12.2501C12.6642 4.5 13.0001 4.1641 13.0001 3.75C13.0001 3.3359 12.6642 3 12.2501 3H1.75012C1.33602 3 1.00012 3.3359 1.00012 3.75C1.00012 4.1641 1.33602 4.5 1.75012 4.5Z"
          fill={fill}
        />
        <path
          d="M12.2501 13.5H1.75012C1.33602 13.5 1.00012 13.8359 1.00012 14.25C1.00012 14.6641 1.33602 15 1.75012 15H12.2501C12.6642 15 13.0001 14.6641 13.0001 14.25C13.0001 13.8359 12.6642 13.5 12.2501 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MenuBars;

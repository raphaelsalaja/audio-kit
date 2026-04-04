import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarLeft4({
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
          d="M14.2501 2H9.00012V16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z"
          fill={fill}
        />
        <path
          d="M3.75012 2C2.23352 2 1.00012 3.2334 1.00012 4.75V13.25C1.00012 14.7666 2.23352 16 3.75012 16H9.00012V2H3.75012Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75012 12.5H6.25012C6.66422 12.5 7.00012 12.1641 7.00012 11.75C7.00012 11.3359 6.66422 11 6.25012 11H3.75012C3.33602 11 3.00012 11.3359 3.00012 11.75C3.00012 12.1641 3.33602 12.5 3.75012 12.5Z"
          fill={fill}
        />
        <path
          d="M3.75012 9.75H6.25012C6.66422 9.75 7.00012 9.4141 7.00012 9C7.00012 8.5859 6.66422 8.25 6.25012 8.25H3.75012C3.33602 8.25 3.00012 8.5859 3.00012 9C3.00012 9.4141 3.33602 9.75 3.75012 9.75Z"
          fill={fill}
        />
        <path
          d="M3.75012 7H6.25012C6.66422 7 7.00012 6.6641 7.00012 6.25C7.00012 5.8359 6.66422 5.5 6.25012 5.5H3.75012C3.33602 5.5 3.00012 5.8359 3.00012 6.25C3.00012 6.6641 3.33602 7 3.75012 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarLeft4;

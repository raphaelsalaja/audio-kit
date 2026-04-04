import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SidebarRight4Hide({
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
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.7501 4.5H10.7501C10.3359 4.5 10.0001 4.83579 10.0001 5.25V12.75C10.0001 13.1642 10.3359 13.5 10.7501 13.5H13.7501C14.1643 13.5 14.5001 13.1642 14.5001 12.75V5.25C14.5001 4.83579 14.1643 4.5 13.7501 4.5Z"
          fill={fill}
        />
        <path
          d="M6.78041 6.46975C6.48741 6.17675 6.01281 6.17675 5.71991 6.46975C5.42701 6.76275 5.42691 7.23727 5.71991 7.53017L6.43962 8.2499H4.25012C3.83602 8.2499 3.50012 8.5858 3.50012 8.9999C3.50012 9.414 3.83602 9.7499 4.25012 9.7499H6.43962L5.71991 10.4696C5.42691 10.7626 5.42691 11.2373 5.71991 11.5302C5.86641 11.6767 6.05781 11.7498 6.25021 11.7498C6.44261 11.7498 6.63402 11.6767 6.78052 11.5302L8.78052 9.53017C9.07352 9.23717 9.07352 8.76253 8.78052 8.46963L6.78041 6.46975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SidebarRight4Hide;

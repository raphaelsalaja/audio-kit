import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareTimeline({
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
          d="M13.2501 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.7501 8.25H7.25009C6.83599 8.25 6.50009 8.5859 6.50009 9C6.50009 9.4141 6.83599 9.75 7.25009 9.75H10.7501C11.1642 9.75 11.5001 9.4141 11.5001 9C11.5001 8.5859 11.1642 8.25 10.7501 8.25Z"
          fill={fill}
        />
        <path
          d="M8.75009 11H5.25009C4.83599 11 4.50009 11.3359 4.50009 11.75C4.50009 12.1641 4.83599 12.5 5.25009 12.5H8.75009C9.16419 12.5 9.50009 12.1641 9.50009 11.75C9.50009 11.3359 9.16419 11 8.75009 11Z"
          fill={fill}
        />
        <path
          d="M12.7501 5.5H9.25009C8.83599 5.5 8.50009 5.8359 8.50009 6.25C8.50009 6.6641 8.83599 7 9.25009 7H12.7501C13.1642 7 13.5001 6.6641 13.5001 6.25C13.5001 5.8359 13.1642 5.5 12.7501 5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareTimeline;

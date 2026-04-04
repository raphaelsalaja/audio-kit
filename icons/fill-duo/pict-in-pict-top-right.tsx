import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictTopRight({
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
          d="M13.2501 2H11.7501C10.2313 2 9.00009 3.23122 9.00009 4.75V6.25C9.00009 7.76878 10.2313 9 11.7501 9H13.2501C14.7689 9 16.0001 7.76878 16.0001 6.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={fill}
        />
        <path
          d="M4.46981 13.5303C4.76281 13.8233 5.23741 13.8233 5.53031 13.5303L7.50001 11.5606V12.7501C7.50001 13.1642 7.83591 13.5001 8.25001 13.5001C8.66411 13.5001 9.00001 13.1642 9.00001 12.7501V9.75012C9.00001 9.33602 8.66411 9.00012 8.25001 9.00012H5.25001C4.83591 9.00012 4.50001 9.33602 4.50001 9.75012C4.50001 10.1642 4.83591 10.5001 5.25001 10.5001H6.43951L4.46981 12.4698C4.17681 12.7628 4.17681 13.2374 4.46981 13.5303Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PictInPictTopRight;

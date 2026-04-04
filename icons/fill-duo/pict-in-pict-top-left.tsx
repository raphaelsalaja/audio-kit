import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PictInPictTopLeft({
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
          d="M6.25009 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V6.25C2.00009 7.76878 3.23131 9 4.75009 9H6.25009C7.76887 9 9.00009 7.76878 9.00009 6.25V4.75C9.00009 3.23122 7.76887 2 6.25009 2Z"
          fill={fill}
        />
        <path
          d="M13.5304 13.5303C13.2374 13.8233 12.7628 13.8233 12.4699 13.5303L10.5002 11.5606V12.7501C10.5002 13.1642 10.1643 13.5001 9.75021 13.5001C9.33611 13.5001 9.00021 13.1642 9.00021 12.7501V9.75012C9.00021 9.33602 9.33611 9.00012 9.75021 9.00012H12.7502C13.1643 9.00012 13.5002 9.33602 13.5002 9.75012C13.5002 10.1642 13.1643 10.5001 12.7502 10.5001H11.5607L13.5304 12.4698C13.8234 12.7628 13.8234 13.2374 13.5304 13.5303Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PictInPictTopLeft;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerXDotted({
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
          d="M9.00012 16C9.41434 16 9.75012 15.6642 9.75012 15.25C9.75012 14.8358 9.41434 14.5 9.00012 14.5C8.58591 14.5 8.25012 14.8358 8.25012 15.25C8.25012 15.6642 8.58591 16 9.00012 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 12.875C9.41434 12.875 9.75012 12.5392 9.75012 12.125C9.75012 11.7108 9.41434 11.375 9.00012 11.375C8.58591 11.375 8.25012 11.7108 8.25012 12.125C8.25012 12.5392 8.58591 12.875 9.00012 12.875Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 9.75C9.41434 9.75 9.75012 9.41421 9.75012 9C9.75012 8.58579 9.41434 8.25 9.00012 8.25C8.58591 8.25 8.25012 8.58579 8.25012 9C8.25012 9.41421 8.58591 9.75 9.00012 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 6.625C9.41434 6.625 9.75012 6.28921 9.75012 5.875C9.75012 5.46079 9.41434 5.125 9.00012 5.125C8.58591 5.125 8.25012 5.46079 8.25012 5.875C8.25012 6.28921 8.58591 6.625 9.00012 6.625Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 3.5C9.41434 3.5 9.75012 3.16421 9.75012 2.75C9.75012 2.33579 9.41434 2 9.00012 2C8.58591 2 8.25012 2.33579 8.25012 2.75C8.25012 3.16421 8.58591 3.5 9.00012 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.75012 2H2.75012C2.33602 2 2.00012 2.3359 2.00012 2.75V15.25C2.00012 15.6641 2.33602 16 2.75012 16H3.75012C5.26672 16 6.50011 14.7666 6.50011 13.25V4.75C6.50011 3.2334 5.26672 2 3.75012 2Z"
          fill={fill}
        />
        <path
          d="M14.2501 2H15.2501C15.6642 2 16.0001 2.3359 16.0001 2.75V15.25C16.0001 15.6641 15.6642 16 15.2501 16H14.2501C12.7335 16 11.5001 14.7666 11.5001 13.25V4.75C11.5001 3.2334 12.7335 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DividerXDotted;

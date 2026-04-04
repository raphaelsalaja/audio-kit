import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareGrid2({
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
          d="M13.2501 2H4.75012C3.23134 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23134 16 4.75012 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.50012 5H5.75012C5.33591 5 5.00012 5.33579 5.00012 5.75V7.5C5.00012 7.91421 5.33591 8.25 5.75012 8.25H7.50012C7.91434 8.25 8.25012 7.91421 8.25012 7.5V5.75C8.25012 5.33579 7.91434 5 7.50012 5Z"
          fill={fill}
        />
        <path
          d="M12.2501 5H10.5001C10.0859 5 9.75012 5.33579 9.75012 5.75V12.25C9.75012 12.6642 10.0859 13 10.5001 13H12.2501C12.6643 13 13.0001 12.6642 13.0001 12.25V5.75C13.0001 5.33579 12.6643 5 12.2501 5Z"
          fill={fill}
        />
        <path
          d="M7.50012 9.75H5.75012C5.33591 9.75 5.00012 10.0858 5.00012 10.5V12.25C5.00012 12.6642 5.33591 13 5.75012 13H7.50012C7.91434 13 8.25012 12.6642 8.25012 12.25V10.5C8.25012 10.0858 7.91434 9.75 7.50012 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareGrid2;

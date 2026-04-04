import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquarePlus({
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
          d="M12.2501 8.25H9.75012V5.75C9.75012 5.3359 9.41422 5 9.00012 5C8.58602 5 8.25012 5.3359 8.25012 5.75V8.25H5.75012C5.33602 8.25 5.00012 8.5859 5.00012 9C5.00012 9.4141 5.33602 9.75 5.75012 9.75H8.25012V12.25C8.25012 12.6641 8.58602 13 9.00012 13C9.41422 13 9.75012 12.6641 9.75012 12.25V9.75H12.2501C12.6642 9.75 13.0001 9.4141 13.0001 9C13.0001 8.5859 12.6642 8.25 12.2501 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquarePlus;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stack2Plus({
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
          d="M13.7501 4H4.25012C2.73134 4 1.50012 5.23122 1.50012 6.75V13.25C1.50012 14.7688 2.73134 16 4.25012 16H13.7501C15.2689 16 16.5001 14.7688 16.5001 13.25V6.75C16.5001 5.23122 15.2689 4 13.7501 4Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.2501 9.25H9.75012V7.75C9.75012 7.3359 9.41422 7 9.00012 7C8.58602 7 8.25012 7.3359 8.25012 7.75V9.25H6.75012C6.33602 9.25 6.00012 9.5859 6.00012 10C6.00012 10.4141 6.33602 10.75 6.75012 10.75H8.25012V12.25C8.25012 12.6641 8.58602 13 9.00012 13C9.41422 13 9.75012 12.6641 9.75012 12.25V10.75H11.2501C11.6642 10.75 12.0001 10.4141 12.0001 10C12.0001 9.5859 11.6642 9.25 11.2501 9.25Z"
          fill={fill}
        />
        <path
          d="M13.2501 1H4.75012C4.33602 1 4.00012 1.3359 4.00012 1.75C4.00012 2.1641 4.33602 2.5 4.75012 2.5H13.2501C13.6642 2.5 14.0001 2.1641 14.0001 1.75C14.0001 1.3359 13.6642 1 13.2501 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Stack2Plus;

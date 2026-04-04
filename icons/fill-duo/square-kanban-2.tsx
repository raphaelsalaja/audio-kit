import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareKanban2({
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
          d="M12.2501 5C11.836 5 11.5001 5.3359 11.5001 5.75V10C11.5001 10.4141 11.836 10.75 12.2501 10.75C12.6642 10.75 13.0001 10.4141 13.0001 10V5.75C13.0001 5.3359 12.6642 5 12.2501 5Z"
          fill={fill}
        />
        <path
          d="M9.00012 5C8.58602 5 8.25012 5.3359 8.25012 5.75V7.75C8.25012 8.1641 8.58602 8.5 9.00012 8.5C9.41422 8.5 9.75012 8.1641 9.75012 7.75V5.75C9.75012 5.3359 9.41422 5 9.00012 5Z"
          fill={fill}
        />
        <path
          d="M5.75012 5C5.33602 5 5.00012 5.3359 5.00012 5.75V12.25C5.00012 12.6641 5.33602 13 5.75012 13C6.16422 13 6.50012 12.6641 6.50012 12.25V5.75C6.50012 5.3359 6.16422 5 5.75012 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareKanban2;

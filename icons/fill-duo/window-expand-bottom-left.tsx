import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandBottomLeft({
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
          d="M13.2501 2H4.75011C3.23132 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 2H11.7501C10.2313 2 9.00012 3.23122 9.00012 4.75V6.25C9.00012 7.76878 10.2313 9 11.7501 9H13.2501C14.7689 9 16.0001 7.76878 16.0001 6.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={fill}
        />
        <path
          d="M8.25012 12H7.06064L8.53033 10.5303C8.82333 10.2373 8.82333 9.76275 8.53033 9.46985C8.23733 9.17695 7.76272 9.17685 7.46982 9.46985L6.00012 10.9395V9.75C6.00012 9.3359 5.66422 9 5.25012 9C4.83602 9 4.50012 9.3359 4.50012 9.75V12.75C4.50012 13.1641 4.83602 13.5 5.25012 13.5H8.25012C8.66422 13.5 9.00012 13.1641 9.00012 12.75C9.00012 12.3359 8.66422 12 8.25012 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandBottomLeft;

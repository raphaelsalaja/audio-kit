import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowExpandBottomRight({
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
          d="M6.25012 2H4.75012C3.23134 2 2.00012 3.23122 2.00012 4.75V6.25C2.00012 7.76878 3.23134 9 4.75012 9H6.25012C7.76891 9 9.00012 7.76878 9.00012 6.25V4.75C9.00012 3.23122 7.76891 2 6.25012 2Z"
          fill={fill}
        />
        <path
          d="M9.75012 12H10.9396L9.46994 10.5303C9.17694 10.2373 9.17694 9.76275 9.46994 9.46985C9.76294 9.17695 10.2375 9.17685 10.5304 9.46985L12.0001 10.9395V9.75C12.0001 9.3359 12.336 9 12.7501 9C13.1642 9 13.5001 9.3359 13.5001 9.75V12.75C13.5001 13.1641 13.1642 13.5 12.7501 13.5H9.75012C9.33602 13.5 9.00012 13.1641 9.00012 12.75C9.00012 12.3359 9.33602 12 9.75012 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowExpandBottomRight;

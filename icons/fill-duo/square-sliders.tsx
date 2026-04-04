import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareSliders({
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
          d="M13.5001 6.75C13.5001 6.3359 13.1642 6 12.7501 6H9.75012C9.33602 6 9.00012 6.3359 9.00012 6.75C9.00012 7.1641 9.33602 7.5 9.75012 7.5H12.7501C13.1642 7.5 13.5001 7.1641 13.5001 6.75Z"
          fill={fill}
        />
        <path
          d="M5.25012 7.5H6.50012V8.5C6.50012 8.9141 6.83602 9.25 7.25012 9.25C7.66422 9.25 8.00012 8.9141 8.00012 8.5V5C8.00012 4.5859 7.66422 4.25 7.25012 4.25C6.83602 4.25 6.50012 4.5859 6.50012 5V6H5.25012C4.83602 6 4.50012 6.3359 4.50012 6.75C4.50012 7.1641 4.83602 7.5 5.25012 7.5Z"
          fill={fill}
        />
        <path
          d="M12.7501 10.5H11.5001V9.5C11.5001 9.0859 11.1642 8.75 10.7501 8.75C10.336 8.75 10.0001 9.0859 10.0001 9.5V13C10.0001 13.4141 10.336 13.75 10.7501 13.75C11.1642 13.75 11.5001 13.4141 11.5001 13V12H12.7501C13.1642 12 13.5001 11.6641 13.5001 11.25C13.5001 10.8359 13.1642 10.5 12.7501 10.5Z"
          fill={fill}
        />
        <path
          d="M8.25012 10.5H5.25012C4.83602 10.5 4.50012 10.8359 4.50012 11.25C4.50012 11.6641 4.83602 12 5.25012 12H8.25012C8.66422 12 9.00012 11.6641 9.00012 11.25C9.00012 10.8359 8.66422 10.5 8.25012 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareSliders;

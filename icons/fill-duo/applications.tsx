import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Applications({
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
          d="M7.25012 10H2.75012C2.33602 10 2.00012 10.3359 2.00012 10.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H7.25012C7.66422 16 8.00012 15.6641 8.00012 15.25V10.75C8.00012 10.3359 7.66422 10 7.25012 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.25012 2.5H4.75012C3.23352 2.5 2.00012 3.7334 2.00012 5.25V7.75C2.00012 8.1641 2.33602 8.5 2.75012 8.5H7.25012C7.66422 8.5 8.00012 8.1641 8.00012 7.75V3.25C8.00012 2.8359 7.66422 2.5 7.25012 2.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.7501 10H10.2501C9.83602 10 9.50012 10.3359 9.50012 10.75V15.25C9.50012 15.6641 9.83602 16 10.2501 16H12.7501C14.2667 16 15.5001 14.7666 15.5001 13.25V10.75C15.5001 10.3359 15.1642 10 14.7501 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 1H11.7501C11.336 1 11.0001 1.3359 11.0001 1.75V6.25C11.0001 6.6641 11.336 7 11.7501 7H16.2501C16.6642 7 17.0001 6.6641 17.0001 6.25V3.75C17.0001 2.2334 15.7667 1 14.2501 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Applications;

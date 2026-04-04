import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridList({
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
          d="M15.2501 3H10.2501C9.83602 3 9.50012 3.3359 9.50012 3.75C9.50012 4.1641 9.83602 4.5 10.2501 4.5H15.2501C15.6642 4.5 16.0001 4.1641 16.0001 3.75C16.0001 3.3359 15.6642 3 15.2501 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 6H10.2501C9.83602 6 9.50012 6.3359 9.50012 6.75C9.50012 7.1641 9.83602 7.5 10.2501 7.5H15.2501C15.6642 7.5 16.0001 7.1641 16.0001 6.75C16.0001 6.3359 15.6642 6 15.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 10.5H10.2501C9.83602 10.5 9.50012 10.8359 9.50012 11.25C9.50012 11.6641 9.83602 12 10.2501 12H15.2501C15.6642 12 16.0001 11.6641 16.0001 11.25C16.0001 10.8359 15.6642 10.5 15.2501 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 13.5H10.2501C9.83602 13.5 9.50012 13.8359 9.50012 14.25C9.50012 14.6641 9.83602 15 10.2501 15H15.2501C15.6642 15 16.0001 14.6641 16.0001 14.25C16.0001 13.8359 15.6642 13.5 15.2501 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25012 2H3.75012C2.78362 2 2.00012 2.7835 2.00012 3.75V6.25C2.00012 7.2165 2.78362 8 3.75012 8H6.25012C7.21662 8 8.00012 7.2165 8.00012 6.25V3.75C8.00012 2.7835 7.21662 2 6.25012 2Z"
          fill={fill}
        />
        <path
          d="M6.25012 10H3.75012C2.78362 10 2.00012 10.7835 2.00012 11.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H6.25012C7.21662 16 8.00012 15.2165 8.00012 14.25V11.75C8.00012 10.7835 7.21662 10 6.25012 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridList;

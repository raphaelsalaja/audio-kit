import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowsMinus({
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
          d="M16.0001 4.75C16.0001 3.2334 14.7667 2 13.2501 2H9.00012H4.75012C3.23352 2 2.00012 3.2334 2.00012 4.75V9H9.00012H16.0001V4.75Z"
          fill={fill}
        />
        <path
          d="M10.0001 14.25C10.0001 13.0093 11.0099 12 12.2501 12H16.0001V9H2.00012V13.25C2.00012 14.7666 3.23352 16 4.75012 16H10.8536C10.3377 15.5874 10.0001 14.9604 10.0001 14.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M17.2501 13.5H12.2501C11.836 13.5 11.5001 13.8359 11.5001 14.25C11.5001 14.6641 11.836 15 12.2501 15H17.2501C17.6642 15 18.0001 14.6641 18.0001 14.25C18.0001 13.8359 17.6642 13.5 17.2501 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowsMinus;

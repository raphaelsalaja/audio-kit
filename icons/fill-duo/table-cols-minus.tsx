import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColsMinus({
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
          d="M4.75012 2C3.23352 2 2.00012 3.2334 2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.00012V2H4.75012Z"
          fill={fill}
        />
        <path
          d="M9.50012 14.25C9.50012 13.0093 10.5099 12 11.7501 12H16.0001V4.75C16.0001 3.2334 14.7667 2 13.2501 2H9.00012V16H10.3536C9.83772 15.5874 9.50012 14.9604 9.50012 14.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.7501 15H11.7501C11.336 15 11.0001 14.6641 11.0001 14.25C11.0001 13.8359 11.336 13.5 11.7501 13.5H16.7501C17.1642 13.5 17.5001 13.8359 17.5001 14.25C17.5001 14.6641 17.1642 15 16.7501 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColsMinus;

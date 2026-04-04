import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BallotRect({
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
          d="M10.2501 6H15.2501C15.6641 6 16.0001 5.664 16.0001 5.25C16.0001 4.836 15.6641 4.5 15.2501 4.5H10.2501C9.83612 4.5 9.50012 4.836 9.50012 5.25C9.50012 5.664 9.83612 6 10.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.2501 12H10.2501C9.83612 12 9.50012 12.336 9.50012 12.75C9.50012 13.164 9.83612 13.5 10.2501 13.5H15.2501C15.6641 13.5 16.0001 13.164 16.0001 12.75C16.0001 12.336 15.6641 12 15.2501 12Z"
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

export default BallotRect;

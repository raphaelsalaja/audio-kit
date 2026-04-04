import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UiCard({
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
          d="M13.2501 16H4.75012C3.23352 16 2.00012 14.7666 2.00012 13.25V4.75C2.00012 3.2334 3.23352 2 4.75012 2H13.2501C14.7667 2 16.0001 3.2334 16.0001 4.75V13.25C16.0001 14.7666 14.7667 16 13.2501 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.2501 4H4.75012C4.33591 4 4.00012 4.33579 4.00012 4.75V10.25C4.00012 10.6642 4.33591 11 4.75012 11H13.2501C13.6643 11 14.0001 10.6642 14.0001 10.25V4.75C14.0001 4.33579 13.6643 4 13.2501 4Z"
          fill={fill}
        />
        <path
          d="M8.25012 12.5H4.75012C4.33602 12.5 4.00012 12.8359 4.00012 13.25C4.00012 13.6641 4.33602 14 4.75012 14H8.25012C8.66422 14 9.00012 13.6641 9.00012 13.25C9.00012 12.8359 8.66422 12.5 8.25012 12.5Z"
          fill={fill}
        />
        <path
          d="M13.2501 12.5H12.5001C12.086 12.5 11.7501 12.8359 11.7501 13.25C11.7501 13.6641 12.086 14 12.5001 14H13.2501C13.6642 14 14.0001 13.6641 14.0001 13.25C14.0001 12.8359 13.6642 12.5 13.2501 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UiCard;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CheckboxUnchecked({
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
          d="M13.2501 16H4.75012C3.23352 16 2.00012 14.7666 2.00012 13.25V4.75C2.00012 3.2334 3.23352 2 4.75012 2H13.2501C14.7667 2 16.0001 3.2334 16.0001 4.75V13.25C16.0001 14.7666 14.7667 16 13.2501 16ZM4.75012 3.5C4.06062 3.5 3.50012 4.0605 3.50012 4.75V13.25C3.50012 13.9395 4.06062 14.5 4.75012 14.5H13.2501C13.9396 14.5 14.5001 13.9395 14.5001 13.25V4.75C14.5001 4.0605 13.9396 3.5 13.2501 3.5H4.75012Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CheckboxUnchecked;

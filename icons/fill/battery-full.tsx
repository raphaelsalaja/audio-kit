import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryFull({
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
          d="M17.25 7H16.5V6.25C16.5 4.733 15.267 3.5 13.75 3.5H3.75C2.233 3.5 1 4.733 1 6.25V11.75C1 13.267 2.233 14.5 3.75 14.5H13.75C15.267 14.5 16.5 13.267 16.5 11.75V11H17.25C17.664 11 18 10.664 18 10.25V7.75C18 7.336 17.664 7 17.25 7ZM15 11.75C15 12.439 14.439 13 13.75 13H3.75C3.061 13 2.5 12.439 2.5 11.75V6.25C2.5 5.561 3.061 5 3.75 5H13.75C14.439 5 15 5.561 15 6.25V11.75Z"
          fill={fill}
        />
        <path
          d="M4 7.25C4 6.83579 4.33579 6.5 4.75 6.5H12.75C13.1642 6.5 13.5 6.83579 13.5 7.25V10.75C13.5 11.1642 13.1642 11.5 12.75 11.5H4.75C4.33579 11.5 4 11.1642 4 10.75V7.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BatteryFull;

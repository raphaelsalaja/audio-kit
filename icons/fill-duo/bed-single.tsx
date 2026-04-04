import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BedSingle({
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
          d="M3 3.75V11H15V3.75C15 2.785 14.215 2 13.25 2H4.75C3.785 2 3 2.785 3 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.25 7.5C11.6642 7.5 12 7.16421 12 6.75V5.75C12 5.336 11.664 5 11.25 5H6.75C6.336 5 6 5.336 6 5.75V6.75C6 7.16421 6.33579 7.5 6.75 7.5H11.25Z"
          fill={fill}
        />
        <path
          d="M13.25 9H4.75C3.233 9 2 10.233 2 11.75V15.25C2 15.664 2.336 16 2.75 16C3.164 16 3.5 15.664 3.5 15.25V14H14.5V15.25C14.5 15.664 14.836 16 15.25 16C15.664 16 16 15.664 16 15.25V11.75C16 10.233 14.767 9 13.25 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BedSingle;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowLeftToLine({
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
          d="M2.75 2C2.336 2 2 2.336 2 2.75V15.25C2 15.664 2.336 16 2.75 16C3.164 16 3.5 15.664 3.5 15.25V2.75C3.5 2.336 3.164 2 2.75 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 8.24999H7.561L10.281 5.52999C10.574 5.23699 10.574 4.76199 10.281 4.46899C9.988 4.17599 9.51299 4.17599 9.21999 4.46899L5.21999 8.46899C4.92699 8.76199 4.92699 9.23699 5.21999 9.52999L9.21999 13.53C9.36599 13.676 9.55799 13.75 9.74999 13.75C9.94199 13.75 10.134 13.677 10.28 13.53C10.573 13.237 10.573 12.762 10.28 12.469L7.55999 9.74899H15.249C15.663 9.74899 15.999 9.41299 15.999 8.99899C15.999 8.58499 15.663 8.24899 15.249 8.24899L15.25 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowLeftToLine;

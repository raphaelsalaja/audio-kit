import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowDownToLine({
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
          d="M15.25 14.5H2.75C2.336 14.5 2 14.836 2 15.25C2 15.664 2.336 16 2.75 16H15.25C15.664 16 16 15.664 16 15.25C16 14.836 15.664 14.5 15.25 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.46999 12.78C8.61599 12.926 8.80799 13 8.99999 13C9.19199 13 9.38399 12.927 9.52999 12.78L13.53 8.78C13.823 8.487 13.823 8.012 13.53 7.719C13.237 7.426 12.762 7.426 12.469 7.719L9.74899 10.439V2.75C9.74899 2.336 9.41299 2 8.99899 2C8.58499 2 8.24899 2.336 8.24899 2.75V10.439L5.52898 7.719C5.23598 7.426 4.76098 7.426 4.46798 7.719C4.17498 8.012 4.17498 8.487 4.46798 8.78L8.46798 12.78H8.46999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowDownToLine;

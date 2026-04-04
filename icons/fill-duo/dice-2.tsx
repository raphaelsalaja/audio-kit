import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice2({
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
          d="M2 4.75C2 3.23128 3.23069 2 4.75 2H13.25C14.7693 2 16 3.23128 16 4.75V13.25C16 14.7687 14.7693 16 13.25 16H4.75C3.23069 16 2 14.7687 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 12C11.552 12 12 11.5523 12 11C12 10.4477 11.552 10 11 10C10.448 10 10 10.4477 10 11C10 11.5523 10.448 12 11 12Z"
          fill={fill}
        />
        <path
          d="M7 8C7.552 8 8 7.5523 8 7C8 6.4477 7.552 6 7 6C6.448 6 6 6.4477 6 7C6 7.5523 6.448 8 7 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dice2;

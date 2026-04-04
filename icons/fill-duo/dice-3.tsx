import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice3({
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
          d="M12 13C12.552 13 13 12.5523 13 12C13 11.4477 12.552 11 12 11C11.448 11 11 11.4477 11 12C11 12.5523 11.448 13 12 13Z"
          fill={fill}
        />
        <path
          d="M9 10C9.552 10 10 9.5523 10 9C10 8.4477 9.552 8 9 8C8.448 8 8 8.4477 8 9C8 9.5523 8.448 10 9 10Z"
          fill={fill}
        />
        <path
          d="M6 7C6.552 7 7 6.5523 7 6C7 5.4477 6.552 5 6 5C5.448 5 5 5.4477 5 6C5 6.5523 5.448 7 6 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dice3;

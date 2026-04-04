import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dice6({
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
          d="M6.5 13.25C7.0523 13.25 7.5 12.8023 7.5 12.25C7.5 11.6977 7.0523 11.25 6.5 11.25C5.9477 11.25 5.5 11.6977 5.5 12.25C5.5 12.8023 5.9477 13.25 6.5 13.25Z"
          fill={fill}
        />
        <path
          d="M6.5 10C7.0523 10 7.5 9.5523 7.5 9C7.5 8.4477 7.0523 8 6.5 8C5.9477 8 5.5 8.4477 5.5 9C5.5 9.5523 5.9477 10 6.5 10Z"
          fill={fill}
        />
        <path
          d="M6.5 6.75C7.0523 6.75 7.5 6.3023 7.5 5.75C7.5 5.1977 7.0523 4.75 6.5 4.75C5.9477 4.75 5.5 5.1977 5.5 5.75C5.5 6.3023 5.9477 6.75 6.5 6.75Z"
          fill={fill}
        />
        <path
          d="M11.5 13.25C12.0523 13.25 12.5 12.8023 12.5 12.25C12.5 11.6977 12.0523 11.25 11.5 11.25C10.9477 11.25 10.5 11.6977 10.5 12.25C10.5 12.8023 10.9477 13.25 11.5 13.25Z"
          fill={fill}
        />
        <path
          d="M11.5 10C12.0523 10 12.5 9.5523 12.5 9C12.5 8.4477 12.0523 8 11.5 8C10.9477 8 10.5 8.4477 10.5 9C10.5 9.5523 10.9477 10 11.5 10Z"
          fill={fill}
        />
        <path
          d="M11.5 6.75C12.0523 6.75 12.5 6.3023 12.5 5.75C12.5 5.1977 12.0523 4.75 11.5 4.75C10.9477 4.75 10.5 5.1977 10.5 5.75C10.5 6.3023 10.9477 6.75 11.5 6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dice6;

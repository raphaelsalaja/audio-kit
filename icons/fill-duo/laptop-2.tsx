import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop2({
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
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H13.75C15.2692 2 16.5 3.23079 16.5 4.75V11.25C16.5 12.7692 15.2692 14 13.75 14H4.25C2.73079 14 1.5 12.7692 1.5 11.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.25 16H3.74998C2.26296 16 1.08853 15.1417 0.4861 14.1021C0.17618 13.5672 0.642186 13 1.26032 13H16.683C17.3203 13 17.8005 13.6012 17.4808 14.1524C16.788 15.3473 15.5256 16 14.25 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Laptop2;

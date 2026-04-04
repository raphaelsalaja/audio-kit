import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clipboard({
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
          d="M5.25 2C3.73079 2 2.5 3.23079 2.5 4.75V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V4.75C15.5 3.23079 14.2692 2 12.75 2H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.5 2.25C5.5 1.28379 6.28379 0.5 7.25 0.5H10.75C11.7162 0.5 12.5 1.28379 12.5 2.25C12.5 3.21621 11.7162 4 10.75 4H7.25C6.28379 4 5.5 3.21621 5.5 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Clipboard;

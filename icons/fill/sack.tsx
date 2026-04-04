import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sack({
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
          d="M5.849 4.5H8.25V3.75C8.25 3.336 8.586 3 9 3C9.414 3 9.75 3.336 9.75 3.75V4.5H12.151L13.374 2.66602C13.456 2.54302 13.5 2.398 13.5 2.25C13.5 1.285 12.715 0.5 11.75 0.5H6.25C5.285 0.5 4.5 1.285 4.5 2.25C4.5 2.398 4.54401 2.54302 4.62601 2.66602L5.849 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25 12.5C2.25 10.213 3.41701 7.705 5.10001 6H12.9C14.582 7.705 15.75 10.219 15.75 12.5C15.75 14.781 14.579 17.5 9 17.5C3.421 17.5 2.25 14.787 2.25 12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sack;

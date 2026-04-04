import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ColorPalette2({
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
          d="M13.662 6.10601L11.894 4.33801C11.259 3.70201 10.171 3.68401 9.49899 4.27301V12.742L13.661 8.58001C13.992 8.24901 14.174 7.81001 14.174 7.34301C14.174 6.87601 13.993 6.43601 13.662 6.10601Z"
          fill={secondaryfill}
        />
        <path
          d="M14.353 10.01L8.36301 16H14.25C15.215 16 16 15.215 16 14.25V11.75C16 10.821 15.269 10.065 14.353 10.01Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2H6.25C7.215 2 8 2.785 8 3.75V13C8 14.654 6.654 16 5 16C3.346 16 2 14.654 2 13V3.75C2 2.785 2.785 2 3.75 2ZM5 14C5.55228 14 6 13.5523 6 13C6 12.4477 5.55228 12 5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ColorPalette2;

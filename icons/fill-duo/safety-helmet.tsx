import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SafetyHelmet({
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
          d="M16 12.5V10C16 7.481 14.612 5.201 12.5 3.968V6.75C12.5 7.164 12.164 7.5 11.75 7.5C11.336 7.5 11 7.164 11 6.75V3.25C11 2.285 10.215 1.5 9.25 1.5H8.75C7.785 1.5 7 2.285 7 3.25V6.75C7 7.164 6.664 7.5 6.25 7.5C5.836 7.5 5.5 7.164 5.5 6.75V3.968C3.388 5.202 2 7.481 2 10V12.5H16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 13.75C1 12.5078 2.00779 11.5 3.25 11.5H14.75C15.9922 11.5 17 12.5078 17 13.75C17 14.9922 15.9922 16 14.75 16H3.25C2.00779 16 1 14.9922 1 13.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SafetyHelmet;

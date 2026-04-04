import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cards({
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
          d="M9.25 1.75H2.75C2.198 1.75 1.75 2.198 1.75 2.75V11.25C1.75 11.802 2.198 12.25 2.75 12.25H9.25C9.802 12.25 10.25 11.802 10.25 11.25V2.75C10.25 2.198 9.802 1.75 9.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 5.3237L15.283 5.858C15.817 5.999 16.136 6.546 15.995 7.08L13.703 15.783C13.562 16.317 13.015 16.636 12.481 16.495L7.75513 15.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Cards;

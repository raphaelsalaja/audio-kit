import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary5({
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
          d="M11 12.75C11 11.7839 11.7833 11 12.75 11H14.75C15.7167 11 16.5 11.7839 16.5 12.75V14.75C16.5 15.7161 15.7167 16.5 14.75 16.5H12.75C11.7833 16.5 11 15.7161 11 14.75V12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 4.25C1.5 2.73069 2.73128 1.5 4.25 1.5C5.76872 1.5 7 2.73069 7 4.25C7 5.76931 5.76872 7 4.25 7C2.73128 7 1.5 5.76931 1.5 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 8C4.66421 8 5 8.33579 5 8.75V11.75C5 12.4408 5.55921 13 6.25 13H9.25C9.66421 13 10 13.3358 10 13.75C10 14.1642 9.66421 14.5 9.25 14.5H6.25C4.73079 14.5 3.5 13.2692 3.5 11.75V8.75C3.5 8.33579 3.83579 8 4.25 8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Itinerary5;

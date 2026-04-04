import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mustache({
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
          d="M11.53,5.75c-1.048,.053-1.999,.621-2.53,1.512-.531-.891-1.482-1.459-2.53-1.512-1.97,0-3.814,3.647-5.72,2.528,0,1.914,1.625,3.972,4.5,3.972,1.467,.002,2.851-.665,3.75-1.806,.899,1.142,2.283,1.809,3.75,1.806,2.875,0,4.5-2.058,4.5-3.972-1.906,1.119-3.75-2.528-5.72-2.528Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Mustache;

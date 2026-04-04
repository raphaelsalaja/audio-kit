import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoEditor({
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
          d="M9,7.688c1.065,.823,1.75,2.113,1.75,3.562,0,2.485-2.015,4.5-4.5,4.5S1.75,13.735,1.75,11.25c0-1.87,1.14-3.473,2.763-4.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.263,10.903c.177-2.323,2.118-4.153,4.487-4.153,2.485,0,4.5,2.015,4.5,4.5s-2.015,4.5-4.5,4.5c-1.036,0-1.99-.35-2.75-.938"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.737,10.903c-.534,.224-1.121,.347-1.737,.347-2.485,0-4.5-2.015-4.5-4.5S6.515,2.25,9,2.25s4.5,2.015,4.5,4.5c0,.117-.004,.233-.013,.347"
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

export default PhotoEditor;

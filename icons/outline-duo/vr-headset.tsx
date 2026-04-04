import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset({
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
          d="M9 4.724C11.142 4.724 13.81 4.801 15.131 5.844C16.452 6.886 16.946 7.963 16.681 9.891C16.417 11.819 15.219 12.861 13.833 13.174C12.447 13.487 11.321 13.032 10.741 12.419C10.116 11.759 9.785 11.197 9 11.197C8.214 11.197 7.884 11.759 7.259 12.419C6.679 13.031 5.553 13.487 4.167 13.174C2.781 12.861 1.583 11.819 1.319 9.891C1.055 7.963 1.548 6.886 2.869 5.844C4.19 4.801 6.858 4.724 9 4.724Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 4.724C11.142 4.724 13.81 4.801 15.131 5.844C16.452 6.886 16.946 7.963 16.681 9.891C16.417 11.819 15.219 12.861 13.833 13.174C12.447 13.487 11.321 13.032 10.741 12.419C10.116 11.759 9.785 11.197 9 11.197C8.214 11.197 7.884 11.759 7.259 12.419C6.679 13.031 5.553 13.487 4.167 13.174C2.781 12.861 1.583 11.819 1.319 9.891C1.055 7.963 1.548 6.886 2.869 5.844C4.19 4.801 6.858 4.724 9 4.724Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 7.366C6.693 7.281 7.659 7.224 9 7.224C10.341 7.224 11.307 7.28 12 7.366"
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

export default VrHeadset;

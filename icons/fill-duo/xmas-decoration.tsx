import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function XmasDecoration({
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
          d="M3 11C3 7.68624 5.68683 5 9 5C12.3132 5 15 7.68624 15 11C15 14.3138 12.3132 17 9 17C5.68683 17 3 14.3138 3 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.34146 9C3.12033 9.62556 3 10.2987 3 11C3 11.7013 3.12033 12.3744 3.34146 13H14.6585C14.8797 12.3744 15 11.7013 15 11C15 10.2987 14.8797 9.62556 14.6585 9H3.34146Z"
          fill={fill}
        />
        <path
          d="M8.25 2.5V0.75C8.25 0.336 8.586 0 9 0C9.414 0 9.75 0.336 9.75 0.75V2.5C10.715 2.5 11.5 3.285 11.5 4.25V5.54414H6.5V4.25C6.5 3.285 7.285 2.5 8.25 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default XmasDecoration;

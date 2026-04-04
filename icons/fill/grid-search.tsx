import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridSearch({
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
        <rect
          height="6"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="2"
        />
        <rect
          height="6"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="10"
          y="2"
        />
        <rect
          height="6"
          width="6"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="10"
        />
        <path
          d="M15.56,14.542c.273-.452,.44-.976,.44-1.542,0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3c.544,0,1.047-.156,1.487-.41l1.19,1.191c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.292,.293-.768,0-1.061l-1.178-1.178Zm-4.06-1.542c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default GridSearch;

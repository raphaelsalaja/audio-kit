import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RowsOffsetLeft({
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
          height="4"
          width="10.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="6.5"
          y="7"
        />
        <rect
          height="4"
          width="10.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="6.5"
          y="1.5"
        />
        <rect
          height="4"
          width="10.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="6.5"
          y="12.5"
        />
        <path
          d="M4.78,5.97c-.293-.293-.768-.293-1.061,0l-2.5,2.5c-.293,.293-.293,.768,0,1.061l2.5,2.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.97-1.97,1.97-1.97c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default RowsOffsetLeft;

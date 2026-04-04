import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignRight({
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
          d="M15.25,17c-.414,0-.75-.336-.75-.75V1.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v14.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <rect
          height="5"
          width="11"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="3"
        />
        <rect
          height="5"
          width="7"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="6"
          y="10"
        />
      </g>
    </svg>
  );
}

export default AlignRight;

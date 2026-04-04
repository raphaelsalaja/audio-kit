import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowFromCornerBottomLeft({
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
          d="M13.25,2H3.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H13.25c.689,0,1.25,.561,1.25,1.25V14.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M9.72,7.22L3.5,13.439v-3.7c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v5.51c0,.414,.336,.75,.75,.75h5.511c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-3.7l6.22-6.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArrowFromCornerBottomLeft;

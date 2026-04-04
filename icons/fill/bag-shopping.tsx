import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagShopping({
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
          d="M11.25,5.5c-.414,0-.75-.336-.75-.75v-1.75c0-.827-.673-1.5-1.5-1.5s-1.5,.673-1.5,1.5v1.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.75c0-1.654,1.346-3,3-3s3,1.346,3,3v1.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.406,6.512c-.125-1.432-1.302-2.512-2.739-2.512H5.333c-1.437,0-2.615,1.08-2.739,2.512l-.652,7.5c-.067,.766,.193,1.53,.712,2.097s1.258,.892,2.027,.892H13.318c.769,0,1.508-.325,2.027-.892s.779-1.331,.712-2.097l-.652-7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BagShopping;

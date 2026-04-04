import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaFastForward({
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
          d="M1.85652 3.75099C1.02423 3.28928 0 3.89087 0 4.84401V13.157C0 14.0558 0.911662 14.6444 1.71523 14.3173C1.81474 14.2768 1.90722 14.2214 2.001 14.1694L9.35561 10.0945C10.2015 9.62691 10.2014 8.37403 9.35561 7.90649L1.85652 3.75099Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.85652 3.75099C9.02423 3.28928 8 3.89087 8 4.84401V13.157C8 14.0558 8.91166 14.6444 9.71523 14.3173C9.81474 14.2768 9.90722 14.2214 10.001 14.1694L17.3556 10.0945C18.2154 9.61922 18.216 8.38256 17.3565 7.90699L9.85652 3.75099Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MediaFastForward;

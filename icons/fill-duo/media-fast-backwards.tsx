import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaFastBackwards({
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
          d="M16.1445 3.75099C16.9768 3.28928 18.001 3.89087 18.001 4.84401V13.157C18.001 14.0558 17.0893 14.6444 16.2858 14.3173C16.1863 14.2768 16.0938 14.2214 16 14.1694L8.64539 10.0945C7.78563 9.61922 7.78502 8.38256 8.64448 7.90699L16.1445 3.75099Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.14448 3.75099C8.97677 3.28928 10.001 3.89087 10.001 4.84401V13.157C10.001 14.0558 9.08934 14.6444 8.28577 14.3173C8.18626 14.2768 8.09378 14.2214 8 14.1694L0.645389 10.0945C-0.214375 9.61922 -0.214979 8.38256 0.644481 7.90699L8.14448 3.75099Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MediaFastBackwards;

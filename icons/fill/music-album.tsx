import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicAlbum({
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
          d="M15.896,4.628c-.334-.399-.823-.628-1.344-.628H3.448c-.521,0-1.01,.229-1.344,.628-.333,.399-.472,.922-.379,1.435l1.638,9c.151,.833,.876,1.437,1.722,1.437h7.83c.846,0,1.57-.604,1.723-1.437l1.637-9c.093-.512-.046-1.035-.379-1.434Zm-6.896,7.622c-1.243,0-2.25-1.007-2.25-2.25s1.007-2.25,2.25-2.25,2.25,1.007,2.25,2.25-1.007,2.25-2.25,2.25Z"
          fill={fill}
        />
        <path
          d="M13.75,2.5H4.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H13.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MusicAlbum;

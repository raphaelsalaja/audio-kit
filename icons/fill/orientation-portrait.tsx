import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OrientationPortrait({
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
          d="M5.28,6.22l-2-2c-.293-.293-.768-.293-1.061,0L.22,6.22c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l.72-.72v6.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V6.561l.72,.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,2h-5c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75h5c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-2.5,4c.69,0,1.25,.56,1.25,1.25s-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25,.56-1.25,1.25-1.25Zm1.385,6h-3.107c-.557,0-.939-.6-.669-1.087,.466-.842,1.359-1.413,2.391-1.413s1.925,.571,2.391,1.413c.27,.487-.112,1.087-1.006,1.087Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OrientationPortrait;

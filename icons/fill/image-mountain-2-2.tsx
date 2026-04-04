import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMountain22({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle
          cx="2.75"
          cy="2.75"
          fill={secondaryfill}
          r="1.75"
          strokeWidth="0"
        />
        <path
          d="m11.022,9.14l-1.463-4.635c-.142-.448-.494-.798-.943-.936-.447-.139-.938-.048-1.308.244,0,0,0,0,0,0L1.454,8.449c-.484.383-.666,1.007-.463,1.59.202.584.732.961,1.351.961h7.317c.454,0,.886-.219,1.154-.585.268-.366.346-.843.209-1.275Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ImageMountain22;

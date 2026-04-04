import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote2Plus({
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
          d="m7.25,4h-1.75v-1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.75h-1.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.75v1.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.75h1.75c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.609,5.342c-2.539-1.385-4.21-3.969-4.227-3.995-.18-.281-.521-.41-.843-.316-.319.094-.54.387-.54.72v8.518c-.629-.476-1.403-.769-2.25-.769-2.068,0-3.75,1.682-3.75,3.75s1.682,3.75,3.75,3.75,3.75-1.682,3.75-3.75V3.915c.82.903,1.977,1.972,3.391,2.743.363.198.819.065,1.018-.299.199-.364.064-.819-.299-1.018v.001Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MusicNote2Plus;

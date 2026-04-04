import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleWaveformLines({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-3,8.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.5Zm2.5,1.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V6.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.5Zm2.5,2c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V4.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V13.25Zm2.5-3c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleWaveformLines;

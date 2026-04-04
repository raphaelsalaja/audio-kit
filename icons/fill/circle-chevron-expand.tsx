import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleChevronExpand({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-2,8.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3c0-.414,.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-2.25v2.25Zm5.5,2.5c0,.414-.336,.75-.75,.75h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.25v-2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleChevronExpand;

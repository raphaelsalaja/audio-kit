import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleSliders({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-3.75,5h1.25v-1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1h-1.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75Zm3,6h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm4.5,0h-1.25v1c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1h1.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-4.5h-3c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleSliders;

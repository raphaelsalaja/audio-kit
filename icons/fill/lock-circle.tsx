import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockCircle({
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
          d="M11.75,8.379c-.414,0-.75-.336-.75-.75v-3.129c0-1.103-.897-2-2-2s-2,.897-2,2v3.127c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-3.127c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v3.129c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,6c-3.033,0-5.5,2.467-5.5,5.5s2.467,5.5,5.5,5.5,5.5-2.467,5.5-5.5-2.467-5.5-5.5-5.5Zm.75,6c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockCircle;

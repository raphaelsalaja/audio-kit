import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessagePlus({
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
          d="M9,13.75c0-1.241,1.01-2.25,2.25-2.25h.25v-.25c0-1.241,1.01-2.25,2.25-2.25s2.25,1.009,2.25,2.25v.25h.25c.25,0,.487,.051,.712,.126,.017-.124,.038-.248,.038-.376V4.25c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v7c0,1.517,1.233,2.75,2.75,2.75h1.25v2.25c0,.288,.165,.551,.425,.676,.104,.05,.215,.074,.325,.074,.167,0,.333-.056,.469-.165l2.919-2.336c-.084-.236-.138-.485-.138-.75Z"
          fill={fill}
        />
        <path
          d="M16.25,13h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MessagePlus;

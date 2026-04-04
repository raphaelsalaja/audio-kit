import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bookmarks({
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
          d="m10.25,4h-5.5c-1.517,0-2.75,1.233-2.75,2.75v9.5c0,.283.159.542.412.669.252.128.555.102.783-.065l4.305-3.172,4.305,3.172c.132.097.288.146.445.146.115,0,.231-.026.338-.081.253-.127.412-.387.412-.669V6.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.25,14c-.4141,0-.75-.3359-.75-.75V3.75c0-.6895-.5605-1.25-1.25-1.25h-6.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h6.25c1.5166,0,2.75,1.2334,2.75,2.75v9.5c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Bookmarks;

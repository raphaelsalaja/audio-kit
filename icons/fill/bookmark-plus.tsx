import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkPlus({
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
          d="m12.25,1h-6.5c-1.517,0-2.75,1.2329-2.75,2.75v12.5c0,.2759.152.531.396.6611.244.1309.541.1167.77-.0371l4.834-3.2231,4.834,3.2231c.125.083.271.126.416.126.122,0,.243-.0291.354-.0889.244-.1301.396-.3853.396-.6611V3.75c0-1.5171-1.233-2.75-2.75-2.75Zm-1,7h-1.5v1.5c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.5h-1.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1.5v-1.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v1.5h1.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BookmarkPlus;

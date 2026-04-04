import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Roadmap2({
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
          d="m13.25,2H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75V4.75c0-1.5166-1.2334-2.75-2.75-2.75ZM3.5,7v-1.5h3.75c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-3.75Zm2.5,2c0-.4141.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-4.5c-.4141,0-.75-.3359-.75-.75Zm8.5,3.5h-3.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.75v1.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Roadmap2;

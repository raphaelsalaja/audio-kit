import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarLock({
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
          d="m8,13.75c0-1.1294.5972-2.1494,1.5073-2.7324.1201-1.96,1.7529-3.5176,3.7427-3.5176.9838,0,1.8786.3828,2.5482,1.0049l.9753-.9507c.2041-.1992.2783-.4976.1895-.769-.0879-.2715-.3223-.4692-.6055-.5103l-4.6191-.6714-2.0654-4.1855c-.2539-.5117-1.0918-.5117-1.3457,0l-2.0654,4.1855-4.6191.6714c-.2832.041-.5176.2388-.6055.5103-.0889.2715-.0146.5698.1895.769l3.3428,3.2583-.79,4.6006c-.0479.2812.0674.5659.2979.7339.2305.167.5371.1895.79.0571l3.1328-1.6465v-.8076Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m15.5,12.0254v-.7754c0-1.2407-1.0093-2.25-2.25-2.25s-2.25,1.0093-2.25,2.25v.7754c-.8459.1226-1.5.8452-1.5,1.7246v1.5c0,.9648.7852,1.75,1.75,1.75h4c.9648,0,1.75-.7852,1.75-1.75v-1.5c0-.8794-.6541-1.6021-1.5-1.7246Zm-2.25-1.5254c.4136,0,.75.3364.75.75v.75h-1.5v-.75c0-.4136.3364-.75.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default StarLock;

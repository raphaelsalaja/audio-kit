import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InternetExplorer({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M29.398,7.706c2.776-7.203-2.616-6.698-2.616-6.698-3.459,0-7.783,3.15-7.783,3.15,0,0-5.158-1.389-10.315,1.73C3.062,9.47,3.248,15.832,3.248,15.832,7.818,9.285,14.181,6.629,14.181,6.629v.432C4.792,13.482,2.568,22.874,2.012,24.789c-.556,1.914-.186,6.211,3.768,6.211s7.968-3.185,7.968-3.185c0,0,.864,.186,3.212,.186,9.883,0,12.231-8.709,12.231-8.709h-8.771s-.618,2.842-3.768,2.842c-4.324,0-4.077-4.509-4.077-4.509H29.314c.802-11.613-9.327-13.281-9.327-13.281,0,0,3.58-2.532,6.671-2.532,4.899,0,2.583,5.739,2.583,5.739l.157,.156ZM13.259,27.687s-6.033,3.661-8.741,1.124c-1.45-2.537,.907-6.129,.907-6.129,0,0,1.995,3.699,7.835,5.005Zm7.256-14.015h-7.961s-.101-3.879,4.081-3.879c4.039,0,3.88,3.879,3.88,3.879Z" />
      </g>
    </svg>
  );
}

export default InternetExplorer;

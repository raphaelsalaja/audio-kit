import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageDepth({
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
          d="M7.75,2c-.689,0-1.25,.561-1.25,1.25s.561,1.25,1.25,1.25,1.25-.561,1.25-1.25-.561-1.25-1.25-1.25Z"
          fill={secondaryfill}
        />
        <path
          d="M4.109,11.324l2.687-3.655-.59-.799c-.571-.773-1.841-.773-2.412,0l-2.763,3.738c-.339,.458-.39,1.059-.133,1.567,.256,.508,.77,.824,1.339,.824h1.248c.046-.594,.255-1.174,.625-1.676Z"
          fill={fill}
        />
        <path
          d="M15.273,15H6.727c-.664,0-1.262-.368-1.562-.96-.299-.592-.241-1.292,.152-1.826l4.273-5.812c.666-.906,2.153-.906,2.82,0l4.273,5.812c.394,.534,.452,1.234,.152,1.826-.3,.592-.898,.96-1.562,.96ZM10.194,6.846h0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ImageDepth;

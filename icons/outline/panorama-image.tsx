import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PanoramaImage({
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
          d="M15.271,14.293l-4.19-5.697c-.4-.543-1.212-.543-1.611,0l-3.623,4.927"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25,13.294c0,.687-.669,1.168-1.32,.945-1.468-.504-3.501-.993-5.942-.991-2.43,.002-4.455,.489-5.918,.991-.65,.223-1.32-.257-1.32-.945V4.706c0-.687,.67-1.168,1.32-.945,1.464,.503,3.488,.99,5.918,.991,2.441,.002,4.474-.487,5.942-.991,.65-.223,1.32,.257,1.32,.945V13.294Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75,6.5c-.689,0-1.25,.561-1.25,1.25s.561,1.25,1.25,1.25,1.25-.561,1.25-1.25-.561-1.25-1.25-1.25Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default PanoramaImage;

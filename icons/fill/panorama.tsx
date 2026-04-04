import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Panorama({
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
          d="M2.745,15.042c-.358,0-.714-.11-1.013-.323-.459-.327-.732-.86-.732-1.426V4.707c0-.566,.273-1.099,.732-1.426,.459-.326,1.047-.412,1.581-.228,1.834,.629,3.743,.949,5.675,.95h.011c1.938,0,3.851-.32,5.688-.951,.532-.184,1.123-.097,1.58,.229,.459,.327,.732,.86,.732,1.426V13.293c0,.566-.273,1.099-.732,1.426-.458,.326-1.048,.413-1.581,.228-1.837-.63-3.75-.95-5.688-.95h-.011c-1.932,0-3.841,.321-5.676,.951-.185,.063-.377,.095-.567,.095Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Panorama;

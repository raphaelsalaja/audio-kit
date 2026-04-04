import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wind({
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
          d="M13.25,13.75c-1.206,0-2.261-.772-2.623-1.923-.125-.395,.094-.816,.489-.941,.396-.124,.816,.095,.94,.49,.165,.522,.645,.874,1.193,.874,.689,0,1.25-.561,1.25-1.25s-.561-1.25-1.25-1.25H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H13.25c1.517,0,2.75,1.233,2.75,2.75s-1.233,2.75-2.75,2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7,17c-1.206,0-2.261-.772-2.623-1.923-.125-.395,.094-.816,.489-.941,.398-.125,.816,.095,.94,.49,.165,.522,.645,.874,1.193,.874,.689,0,1.25-.561,1.25-1.25s-.561-1.25-1.25-1.25H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H7c1.517,0,2.75,1.233,2.75,2.75s-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M10.75,6.5H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H10.75c.689,0,1.25-.561,1.25-1.25s-.561-1.25-1.25-1.25c-.549,0-1.028,.352-1.193,.874-.124,.395-.541,.614-.94,.49-.396-.125-.614-.546-.489-.941,.362-1.15,1.417-1.923,2.623-1.923,1.517,0,2.75,1.233,2.75,2.75s-1.233,2.75-2.75,2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wind;

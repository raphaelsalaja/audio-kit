import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownFromLine({
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
          d="M13.463,9h-1.463v-3.25c0-.965-.785-1.75-1.75-1.75h-2.5c-.965,0-1.75,.785-1.75,1.75v3.25h-1.463c-.484,0-.916,.271-1.126,.707-.21,.437-.153,.943,.148,1.321h0s4.463,5.606,4.463,5.606c.239,.299,.595,.471,.978,.471s.739-.172,.978-.471l4.463-5.606c.301-.378,.358-.885,.148-1.321-.21-.436-.642-.707-1.126-.707Z"
          fill={fill}
        />
        <path
          d="M6.75,2.5h4.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H6.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDownFromLine;

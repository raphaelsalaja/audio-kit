import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneTakeOff({
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
          d="M15.25,16H2.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M5.361,7.628l4.424-1.913L5.54,3.58c-.528-.267-1.148-.249-1.662,.048l-1.253,.722c-.22,.127-.361,.357-.374,.612-.013,.254,.104,.498,.311,.646l2.799,2.019Z"
          fill={fill}
        />
        <path
          d="M17.312,6.446c-.438-1.067-1.728-1.605-2.805-1.139L4.723,9.538l-1.195-.781c-.493-.321-1.159-.319-1.651,.008l-.971,.647c-.188,.125-.311,.33-.331,.556s.062,.449,.225,.606l1.773,1.72c.469,.455,1.087,.706,1.74,.706h2.467c.327,0,.646-.063,.961-.192l8.444-3.616c1.056-.451,1.562-1.683,1.127-2.746Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PlaneTakeOff;

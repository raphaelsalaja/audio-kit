import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AscendingSorting({
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
          d="M13.28,5.72c-.293-.293-.768-.293-1.061,0l-2.5,2.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.22-1.22v7.189c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-7.189l1.22,1.22c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-2.5-2.5Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75,9H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H7.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M7.75,5.5H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H7.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
        <path
          d="M2.75,3.5H12.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AscendingSorting;

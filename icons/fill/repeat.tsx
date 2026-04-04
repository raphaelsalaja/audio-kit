import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat({
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
          d="M13.75,14.5h-5.242c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5.242c.689,0,1.25-.561,1.25-1.25V6.25c0-.689-.561-1.25-1.25-1.25H4.25c-.689,0-1.25,.561-1.25,1.25v5.5c0,.689,.561,1.25,1.25,1.25h.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-.75c-1.517,0-2.75-1.233-2.75-2.75V6.25c0-1.517,1.233-2.75,2.75-2.75H13.75c1.517,0,2.75,1.233,2.75,2.75v5.5c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M10.5,16.985c-.192,0-.384-.073-.53-.22l-2.492-2.493c-.293-.293-.293-.768,0-1.061l2.492-2.492c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-1.962,1.962,1.962,1.962c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Repeat;

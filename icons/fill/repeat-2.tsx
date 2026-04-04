import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat2({
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
          d="M13.75,3.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c.689,0,1.25,.561,1.25,1.25v5.5c0,.689-.561,1.25-1.25,1.25h-4.689l1.22-1.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-2.492,2.492c-.293,.293-.293,.768,0,1.061l2.492,2.493c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.204-1.205h4.674c1.516,0,2.75-1.233,2.75-2.75V6.25c0-1.517-1.234-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25,13c-.689,0-1.25-.561-1.25-1.25V6.25c0-.689,.561-1.25,1.25-1.25h4.682l-1.212,1.212c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.492-2.492c.293-.293,.293-.768,0-1.061l-2.492-2.492c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.212,1.212H4.25c-1.516,0-2.75,1.233-2.75,2.75v5.5c0,1.517,1.234,2.75,2.75,2.75,.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Repeat2;

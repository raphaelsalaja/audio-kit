import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeCompare({
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
          d="M12.25,3h-1.689l.97-.97c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-2.25,2.25c-.293,.293-.293,.768,0,1.061l2.25,2.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-.97-.97h1.689c.689,0,1.25,.561,1.25,1.25v6.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V5.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9.78,13.72l-2.25-2.25c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l.97,.97h-1.689c-.689,0-1.25-.561-1.25-1.25V5.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v6.5c0,1.517,1.233,2.75,2.75,2.75h1.689l-.97,.97c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <circle cx="14.25" cy="14.25" fill={fill} r="2.5" />
        <circle cx="3.75" cy="3.75" fill={fill} r="2.5" />
      </g>
    </svg>
  );
}

export default CodeCompare;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DirectionsAll({
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
          d="M4.25,8h-1.189l1.22-1.22c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0L.72,8.22c-.293,.293-.293,.768,0,1.061l2.5,2.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-1.22-1.22h1.189c.689,0,1.25,.561,1.25,1.25v5.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-5.5c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M11.5,5c.192,0,.384-.073,.53-.22,.293-.293,.293-.768,0-1.061l-2.5-2.5c-.293-.293-.768-.293-1.061,0l-2.5,2.5c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.22-1.22v12.689c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.561l1.22,1.22c.146,.146,.338,.22,.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M17.28,8.22l-2.5-2.5c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l1.22,1.22h-1.189c-1.517,0-2.75,1.233-2.75,2.75v5.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-5.5c0-.689,.561-1.25,1.25-1.25h1.189l-1.22,1.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DirectionsAll;

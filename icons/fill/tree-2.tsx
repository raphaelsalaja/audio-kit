import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tree2({
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
          d="M8.25,14v2.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-2.25h-1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.717,5.185c-.28-2.354-2.289-4.185-4.717-4.185-2.414,0-4.412,1.81-4.708,4.182-1.914,.534-3.292,2.292-3.292,4.318,0,2.481,2.019,4.5,4.5,4.5h2.75v-1.439l-2.28-2.28c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.22,1.22v-3.689c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.939l.72-.72c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-1.78,1.78v3.189h2.75c2.481,0,4.5-2.019,4.5-4.5,0-2.022-1.374-3.779-3.283-4.315Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tree2;

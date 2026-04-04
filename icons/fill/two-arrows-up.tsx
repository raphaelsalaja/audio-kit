import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TwoArrowsUp({
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
          d="M8.72,6.28c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3-3c-.293-.293-.768-.293-1.061,0l-3,3c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.72-1.72V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.561l1.72,1.72Z"
          fill={secondaryfill}
        />
        <path
          d="M12.78,6.72c-.293-.293-.768-.293-1.061,0l-3,3c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.72-1.72v6.189c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-6.189l1.72,1.72c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3-3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TwoArrowsUp;

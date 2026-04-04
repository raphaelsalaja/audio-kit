import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TwoArrowsDown({
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
          d="M8.72,11.72l-1.72,1.72V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V13.439l-1.72-1.72c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3,3c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3-3c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M14.72,7.22l-1.72,1.72V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v6.189l-1.72-1.72c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3,3c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3-3c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TwoArrowsDown;

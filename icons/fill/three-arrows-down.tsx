import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThreeArrowsDown({
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
          d="M15.47,4.97l-.97,.97V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.189l-.97-.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.25,2.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={fill}
        />
        <path
          d="M10.72,12.47l-.97,.97V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V13.439l-.97-.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.25,2.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0Z"
          fill={secondaryfill}
        />
        <path
          d="M7.03,7.97c-.293-.293-.768-.293-1.061,0l-.97,.97V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v6.189l-.97-.97c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.25,2.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.25-2.25c.293-.293,.293-.768,0-1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ThreeArrowsDown;

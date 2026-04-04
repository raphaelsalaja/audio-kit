import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connections3({
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
          d="M8.47,7.523c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.75-2.75c.293-.293,.293-.768,0-1.061L9.53,.962c-.293-.293-.768-.293-1.061,0l-2.75,2.75c-.293,.293-.293,.768,0,1.061l2.75,2.75Z"
          fill={fill}
        />
        <path
          d="M7.522,8.47l-2.75-2.75c-.293-.293-.768-.293-1.061,0L.962,8.47c-.293,.293-.293,.768,0,1.061l2.75,2.75c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.75-2.75c.293-.293,.293-.768,0-1.061Z"
          fill={fill}
        />
        <path
          d="M9.53,10.477c-.293-.293-.768-.293-1.061,0l-2.75,2.75c-.293,.293-.293,.768,0,1.061l2.75,2.75c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.75-2.75c.293-.293,.293-.768,0-1.061l-2.75-2.75Z"
          fill={fill}
        />
        <path
          d="M17.038,8.47l-2.75-2.75c-.293-.293-.768-.293-1.061,0l-2.75,2.75c-.293,.293-.293,.768,0,1.061l2.75,2.75c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.75-2.75c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Connections3;

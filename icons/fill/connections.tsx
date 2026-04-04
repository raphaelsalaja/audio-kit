import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connections({
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
          d="M16.78,8.47L9.53,1.22c-.293-.293-.768-.293-1.061,0L1.22,8.47c-.293,.293-.293,.768,0,1.061l7.25,7.25c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l7.25-7.25c.293-.293,.293-.768,0-1.061ZM9,2.811l2.564,2.564-2.564,2.564-2.564-2.564,2.564-2.564Zm-3.625,3.625l2.564,2.564-2.564,2.564-2.564-2.564,2.564-2.564Zm3.625,8.754l-2.564-2.564,2.564-2.564,2.564,2.564-2.564,2.564Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Connections;

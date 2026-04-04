import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Merge3({
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
          d="M15.03,14.97l-3.75-3.75c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.75,3.75c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M11.72,5.53c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.25-3.25c-.293-.293-.768-.293-1.061,0l-3.25,3.25c-.293,.293-.293,.768,0,1.061s.768,.293,1.061,0l1.97-1.97v5.611c0,.334-.13,.648-.366,.884L2.97,14.97c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l4.914-4.914c.52-.52,.806-1.21,.806-1.945V3.561l1.97,1.97Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Merge3;

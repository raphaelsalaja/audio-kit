import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ThreeWayArrowMerge({
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
          d="M15.03,13.72l-4.914-4.914c-.236-.236-.366-.55-.366-.884V2c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V7.921c0,.334-.13,.648-.366,.884L2.97,13.72c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l4.22-4.22v4.939c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.939l4.22,4.22c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,5.75c-.192,0-.384-.073-.53-.22l-2.72-2.72-2.72,2.72c-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061l3.25-3.25c.293-.293,.768-.293,1.061,0l3.25,3.25c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ThreeWayArrowMerge;

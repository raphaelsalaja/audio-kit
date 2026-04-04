import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToUp({
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
          d="M8,16.5c-2.481,0-4.5-2.019-4.5-4.5v-3.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v3.75c0,1.654,1.346,3,3,3s3-1.346,3-3V2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V12c0,2.481-2.019,4.5-4.5,4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M15.25,6.5c-.192,0-.384-.073-.53-.22l-2.97-2.97-2.97,2.97c-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061l3.5-3.5c.293-.293,.768-.293,1.061,0l3.5,3.5c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UTurnToUp;

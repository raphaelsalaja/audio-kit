import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UTurnToLeft({
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
          d="M12,14.5h-3.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.75c1.654,0,3-1.346,3-3s-1.346-3-3-3H2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H12c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M5.75,10.5c-.192,0-.384-.073-.53-.22L1.72,6.78c-.293-.293-.293-.768,0-1.061l3.5-3.5c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-2.97,2.97,2.97,2.97c.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UTurnToLeft;

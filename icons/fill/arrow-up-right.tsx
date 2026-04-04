import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowUpRight({
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
          d="M3.75,15c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L13.47,3.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L4.28,14.78c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25,10.51c-.414,0-.75-.336-.75-.75V4.5h-5.26c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.01c.414,0,.75,.336,.75,.75v6.01c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowUpRight;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChevronUp({
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
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-.72,8.53c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-2.47-2.47-2.47,2.47c-.293,.293-.768,.293-1.061,0s-.293-.768,0-1.061l3-3c.293-.293,.768-.293,1.061,0l3,3c.293,.293,.293,.768,0,1.061Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareChevronUp;

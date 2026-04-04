import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleOpenArrowDown({
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
          d="M9.75,1.038V10.439l1.97-1.97c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061l-3.25,3.25c-.146,.146-.338,.22-.53,.22s-.384-.073-.53-.22l-3.25-3.25c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.97,1.97V1.038C4.19,1.418,1,4.842,1,9c0,4.411,3.589,8,8,8s8-3.589,8-8c0-4.158-3.19-7.582-7.25-7.962Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleOpenArrowDown;

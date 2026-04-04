import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PointerCircle({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm4.021,8.64l-2.562,.819-.82,2.56c-.135,.427-.528,.721-.978,.731h-.022c-.44,0-.836-.275-.987-.69l-2.338-6.397c-.143-.389-.049-.812,.244-1.104,.292-.293,.715-.387,1.104-.244l6.396,2.337c.421,.153,.698,.558,.689,1.007-.008,.449-.301,.844-.728,.981Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PointerCircle;

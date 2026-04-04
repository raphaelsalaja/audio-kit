import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretDown({
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
          d="M14.024,4H3.976c-.638,0-1.226,.347-1.533,.906s-.287,1.242,.055,1.781l5.024,7.923c.323,.509,.875,.812,1.478,.812s1.155-.304,1.478-.812l5.025-7.924c.341-.539,.362-1.222,.055-1.781s-.895-.906-1.533-.906Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretDown;

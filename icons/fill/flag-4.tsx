import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag4({
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
          d="M14.241,5.577L4.01,1.796s-.007,0-.01,0V11.705s.007,0,.01-.002l10.231-3.781c.496-.184,.816-.644,.816-1.173s-.32-.989-.817-1.173Z"
          fill={fill}
        />
        <path
          d="M3.75,17c-.414,0-.75-.336-.75-.75V1.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v14.5c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Flag4;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Curve({
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
          d="M2.75,15.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c4.058,0,4.707-2.296,5.528-5.204,.834-2.951,1.779-6.296,6.972-6.296,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75c-4.058,0-4.707,2.296-5.528,5.204-.834,2.951-1.779,6.296-6.972,6.296Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Curve;

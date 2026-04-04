import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceKiss({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm-3,8.75c-1.103,0-2-.897-2-2,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,.276,.225,.5,.5,.5s.5-.224,.5-.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.103-.897,2-2,2Zm3.75,4.875c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c.275,0,.5-.224,.5-.5s-.225-.5-.5-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75c1.103,0,2,.897,2,2s-.897,2-2,2Zm2.25-4.875c-1.103,0-2-.897-2-2,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,.276,.225,.5,.5,.5s.5-.224,.5-.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.103-.897,2-2,2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceKiss;

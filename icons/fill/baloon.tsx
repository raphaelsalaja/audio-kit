import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Baloon({
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
          d="M8.655,18c-.192,0-.384-.073-.53-.22-.723-.723-.723-1.898,0-2.621l.372-.376c.141-.141,.141-.365,.003-.503-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0c.723,.723,.723,1.898,0,2.621l-.372,.376c-.141,.141-.141,.365-.003,.503,.293,.293,.293,.768,0,1.061-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
        <path
          d="M9,1c-3.309,0-6,3.028-6,6.75s2.691,6.75,6,6.75,6-3.028,6-6.75S12.309,1,9,1Zm0,4c-1.065,0-2,1.285-2,2.75,0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-2.304,1.603-4.25,3.5-4.25,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Baloon;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeviceMockup({
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
          d="M1.829,8.709l3.694,1.965c.542,.289,1.194,.284,1.732-.012l8.924-4.906c.432-.237,.428-.859-.007-1.091l-3.694-1.965c-.542-.289-1.194-.284-1.732,.012L1.821,7.618c-.432,.237-.428,.859,.007,1.091Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.462,11.878l-.641,.352c-.432,.237-.428,.859,.007,1.091l3.694,1.965c.542,.289,1.194,.284,1.732-.012l8.924-4.906c.432-.237,.428-.859-.007-1.091l-.614-.327"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DeviceMockup;

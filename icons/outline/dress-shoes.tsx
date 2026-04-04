import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DressShoes({
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
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.25"
          x2="9"
          y1="7.042"
          y2="8.125"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="1.75"
          x2="7"
          y1="12.25"
          y2="12.25"
        />
        <path
          d="M1.75,5.75c.423,.23,1.641,.821,3.25,.625,1.816-.221,2.935-1.299,3.25-1.625,.503,.725,1.156,1.519,2,2.292,1.91,1.748,3.988,2.642,5.586,3.113,.831,.245,1.414,.99,1.414,1.857v.071c0,.397-.278,.735-.668,.812-1.278,.252-2.946,.441-4.88,.306-1.925-.134-3.524-.548-4.702-.95l-.5,1H1.75v-1c-.409-.791-.75-1.85-.75-3.583,0-1.262,.488-2.449,.75-2.917Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DressShoes;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlaneTakeOff({
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
          d="M2.75 15.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M17.312 6.446C16.874 5.379 15.584 4.841 14.507 5.307L4.72298 9.538L3.52798 8.757C3.03498 8.436 2.36898 8.438 1.87698 8.765L0.905983 9.412C0.717983 9.537 0.594983 9.742 0.574983 9.968C0.554983 10.194 0.636983 10.417 0.799983 10.574L2.57298 12.294C3.04198 12.749 3.65998 13 4.31298 13H6.77998C7.10698 13 7.42598 12.937 7.74098 12.808L16.185 9.192C17.241 8.741 17.747 7.509 17.312 6.446Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.7623 3.44763C5.23635 3.18378 4.61175 3.20091 4.1004 3.49683L3.20312 4.01562C2.98301 4.14298 2.84243 4.37318 2.82967 4.62716C2.81691 4.88113 2.9337 5.12427 3.13993 5.27304L7.42954 8.36757L11.7937 6.48033L5.7623 3.44763Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PlaneTakeOff;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Slash({
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
          d="M5.201 12.7991L15.1063 2.89359C14.0585 2.14849 12.7797 1.86479 11.5312 2.11769C10.5283 2.32029 9.64839 2.83599 8.99799 3.58159C8.95799 3.53669 8.9179 3.49269 8.8769 3.44929C8.0371 2.56499 6.9033 2.06059 5.6835 2.02939C4.4618 2.00159 3.30559 2.44399 2.42179 3.28329C1.53699 4.12309 1.03309 5.25689 1.00089 6.47619C0.969694 7.69589 1.41499 8.85459 2.25869 9.74229L5.201 12.7991Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.5599 4.62161L6.76141 14.4202L7.73822 15.4351C8.07022 15.7818 8.51852 15.9732 8.99892 15.9732C9.48032 15.9732 9.92861 15.7818 10.2596 15.4361L15.7401 9.74231C15.7411 9.74131 15.743 9.73991 15.744 9.73891C16.8446 8.57971 17.2557 6.94501 16.8417 5.36491C16.7741 5.10881 16.6743 4.86211 16.5599 4.62161Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.74999 16C2.55759 16 2.36619 15.9268 2.21969 15.7803C1.92669 15.4873 1.92669 15.0127 2.21969 14.7198L15.4697 1.46981C15.7627 1.17681 16.2373 1.17681 16.5302 1.46981C16.8231 1.76281 16.8232 2.23741 16.5302 2.53031L3.28019 15.7803C3.13369 15.9268 2.94239 16 2.74999 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heart2Slash;

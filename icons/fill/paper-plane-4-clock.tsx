import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4Clock({
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
          d="M14 10C11.794 10 10 11.794 10 14C10 16.206 11.794 18 14 18C16.206 18 18 16.206 18 14C18 11.794 16.206 10 14 10ZM16.312 14.95C16.193 15.24 15.914 15.415 15.619 15.415C15.523 15.415 15.428 15.397 15.334 15.359L13.715 14.694C13.434 14.578 13.25 14.304 13.25 14V12.25C13.25 11.836 13.586 11.5 14 11.5C14.414 11.5 14.75 11.836 14.75 12.25V13.497L15.904 13.971C16.287 14.128 16.47 14.567 16.312 14.95Z"
          fill={secondaryfill}
        />
        <path
          d="M3.35091 1.92254L15.2172 8.0844C15.463 8.21203 15.6192 8.46809 15.6216 8.74357C15.1089 8.58526 14.5643 8.5 14 8.5C11.1719 8.5 8.83801 10.6416 8.53362 13.3894L3.35091 16.0775C2.35851 16.5927 1.23707 15.6638 1.55269 14.5947L2.98848 9.75H8.38598C8.80019 9.75 9.13598 9.41421 9.13598 9C9.13598 8.58579 8.80019 8.25 8.38598 8.25H2.98848L1.55292 3.40612C1.23727 2.33685 2.35843 1.40693 3.35091 1.92254Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PaperPlane4Clock;

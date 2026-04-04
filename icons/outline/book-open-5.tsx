import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookOpen5({
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
          d="m9,15.051c.17,0,.339-.045.494-.134.643-.371,1.732-.847,3.141-.845.899.001,1.667.197,2.27.435.648.255,1.344-.24,1.344-.937V4.487c0-.354-.181-.68-.486-.86-.5393-.3183-1.4027-.7163-2.513-.8308"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,15.051c-.17,0-.339-.045-.494-.134-.643-.371-1.732-.847-3.141-.845-.899.001-1.667.197-2.27.435-.648.255-1.344-.237-1.344-.933V4.484c0-.354.181-.676.486-.856.637-.376,1.726-.863,3.14-.863,1.89,0,3.198.872,3.624,1.182"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.999,15.051c.6301-1.3222,1.9537-2.2143,3.6105-2.3971.3692-.0407.6405-.3676.6405-.739V2.3259c0-.4569-.4081-.8165-.8599-.7486-1.5127.2275-2.7746,1.0598-3.3911,2.3686v11.105Z"
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

export default BookOpen5;

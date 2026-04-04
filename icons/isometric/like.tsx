import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Like({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M14.222 13.2619L10.5969 3.5L13.5969 2L17.1677 11.7451L14.222 13.2619Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M17.5969 23V15L20.5969 13.5V21.5L17.5969 23Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M3.59692 5.00012L8.23512 7.31922C8.40135 7.40233 8.59692 7.28146 8.59692 7.09561V4"
          stroke={fill}
          strokeMiterlimit="2"
        />
        <path
          d="M17.5969 23L17.5969 15.6181C17.5969 15.2393 17.3829 14.8931 17.0441 14.7237L14.4555 13.4294C14.2254 13.3143 14.0485 13.115 13.9615 12.8728L10.7324 3.87738C10.6455 3.63521 10.4685 3.43587 10.2384 3.32081L8.59692 2.50012"
          stroke={fill}
          strokeMiterlimit="2"
        />
        <path
          d="M13.7326 2.37726L16.9617 11.3727C17.0486 11.6148 17.2255 11.8142 17.4557 11.9292L20.0443 13.2236C20.3831 13.393 20.5971 13.7392 20.5971 14.118V20.882C20.5971 21.2608 20.3831 21.6071 20.0443 21.7764L18.2677 22.6647C17.8454 22.8758 17.3484 22.8758 16.9261 22.6647L7.3095 17.8563C6.84254 17.6228 6.441 17.2739 6.16524 16.8306C4.44805 14.0701 3.21959 10.7915 3.55551 5.56058C3.57788 5.2123 3.78743 4.90478 4.09958 4.74871L6.14986 3.7236C6.43138 3.58284 6.76275 3.58284 7.04428 3.7236L8.59707 4.5V3.11803C8.59707 2.73926 8.81107 2.393 9.14986 2.22361L11.1499 1.2236C11.4314 1.08284 11.7627 1.08283 12.0443 1.22359L13.2386 1.82068C13.4687 1.93575 13.6456 2.13509 13.7326 2.37726Z"
          stroke={fill}
          strokeLinecap="square"
          strokeMiterlimit="2"
        />
        <path d="M17.5969 15L20.5969 13.5" stroke={fill} />
        <path d="M14.3027 13.2339L17.3027 11.7339" stroke={fill} />
        <path
          d="M10.5 3.59314C11.6716 3.00735 12.3284 2.67893 13.5 2.09314"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Like;

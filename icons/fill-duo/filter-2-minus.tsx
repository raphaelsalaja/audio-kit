import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter2Minus({
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
          d="M10.5 13.25C10.5 12.8358 10.8358 12.5 11.25 12.5H16.25C16.6642 12.5 17 12.8358 17 13.25C17 13.6642 16.6642 14 16.25 14H11.25C10.8358 14 10.5 13.6642 10.5 13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 1.99999L15.25 1.99899C15.664 1.99899 16 2.33499 16 2.74899V4.53399C16 5.05199 15.773 5.53999 15.377 5.87299L11 9.56799V11.0137C9.87501 11.1381 9 12.0919 9 13.25C9 14.4081 9.87501 15.3619 11 15.4863V16.25C11 16.664 10.664 17 10.25 17H7.75C7.336 17 7 16.664 7 16.25V9.56799L2.622 5.87299C2.227 5.53999 2 5.05299 2 4.53499V2.74999C2 2.33599 2.336 1.99999 2.75 1.99999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Filter2Minus;

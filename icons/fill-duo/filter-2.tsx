import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter2({
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
          d="M2.75 1.99999C2.336 1.99999 2 2.33599 2 2.74999V4.53499C2 5.05299 2.227 5.53999 2.622 5.87299L7 9.56799V16.25C7 16.664 7.336 17 7.75 17H10.25C10.664 17 11 16.664 11 16.25V9.56799L15.377 5.87299C15.773 5.53999 16 5.05199 16 4.53399V2.74899C16 2.33499 15.664 1.99899 15.25 1.99899L2.75 1.99999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Filter2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleArrowOut({
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
          d="M9.00001 17C7.38871 17 5.83541 16.5229 4.50731 15.6201C4.16501 15.3872 4.07611 14.9209 4.30911 14.5781C4.54251 14.2348 5.00781 14.1465 5.35111 14.3799C6.42871 15.1128 7.69091 15.5 9.00001 15.5C12.584 15.5 15.5 12.584 15.5 9C15.5 5.416 12.584 2.5 9.00001 2.5C7.68991 2.5 6.42821 2.88722 5.35111 3.62012C5.00981 3.85402 4.54251 3.76507 4.30911 3.42188C4.07621 3.07958 4.16511 2.61278 4.50731 2.37988C5.83401 1.47708 7.38771 1 9.00001 1C13.4111 1 17 4.5889 17 9C17 13.4111 13.4111 17 9.00001 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.99999 13C5.19199 13 5.38399 12.9271 5.52999 12.7801C5.82299 12.4871 5.82299 12.012 5.52999 11.719L3.55999 9.74905H11.249C11.663 9.74905 11.999 9.41305 11.999 8.99905C11.999 8.58505 11.663 8.24905 11.249 8.24905H3.56099L5.53099 6.27902C5.82399 5.98602 5.82399 5.51104 5.53099 5.21804C5.23799 4.92504 4.76299 4.92504 4.46999 5.21804L1.21999 8.46804C0.926994 8.76104 0.926994 9.23602 1.21999 9.52902L4.46999 12.779C4.61599 12.925 4.80799 13 4.99999 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleArrowOut;

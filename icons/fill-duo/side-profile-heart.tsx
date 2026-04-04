import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileHeart({
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
          d="M17.099 9.29899L15.745 7.49399C15.673 5.54999 14.773 3.74499 13.255 2.50999C11.668 1.22099 9.59001 0.72699 7.55401 1.15099C5.00501 1.68399 2.93501 3.75299 2.40101 6.30199C1.80201 9.16999 3.04001 12.002 5.50001 13.493V16.249C5.50001 16.663 5.83601 16.999 6.25001 16.999H11.25C11.664 16.999 12 16.663 12 16.249V14.499H12.89C14.325 14.499 15.53 13.378 15.632 11.948L15.71 10.873L16.778 10.446C16.995 10.36 17.159 10.177 17.221 9.95199C17.284 9.72699 17.24 9.48599 17.099 9.29899Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.798 10.387C8.925 10.454 9.074 10.454 9.201 10.387C9.874 10.033 11.999 8.75099 11.999 6.66599C12.002 5.74999 11.269 5.00499 10.359 4.99899C9.812 5.00599 9.303 5.28399 8.999 5.74199C8.695 5.28399 8.186 5.00599 7.639 4.99899C6.729 5.00499 5.996 5.74999 5.999 6.66599C5.999 8.75099 8.125 10.033 8.798 10.387Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SideProfileHeart;

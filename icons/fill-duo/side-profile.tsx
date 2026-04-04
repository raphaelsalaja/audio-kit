import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfile({
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
          d="M17.099 9.29899L15.745 7.49399C15.673 5.54999 14.773 3.74499 13.255 2.50999C11.668 1.22099 9.58998 0.72699 7.55398 1.15099C5.00498 1.68399 2.93498 3.75299 2.40098 6.30199C1.80198 9.16999 3.03998 12.002 5.49998 13.493V16.249C5.49998 16.663 5.83598 16.999 6.24998 16.999H11.25C11.664 16.999 12 16.663 12 16.249V14.499H12.89C14.325 14.499 15.53 13.378 15.632 11.948L15.71 10.873L16.778 10.446C16.995 10.36 17.159 10.177 17.221 9.95199C17.284 9.72699 17.24 9.48599 17.099 9.29899Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 7C12 7.552 12.448 8 13 8C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6C12.448 6 12 6.448 12 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SideProfile;

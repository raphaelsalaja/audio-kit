import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BottleWater({
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
        <path d="M6.512 10H2.75V14L6.8 14.03L6.512 10Z" fill={fill} />
        <path
          d="M15.799 9.239C15.657 9.087 15.458 9 15.25 9H8.75001C8.54201 9 8.34301 9.086 8.20101 9.239C8.05901 9.391 7.98701 9.596 8.00201 9.803L8.43601 15.875C8.50101 16.786 9.26801 17.5 10.182 17.5H13.82C14.734 17.5 15.5 16.786 15.566 15.875L16 9.804C16.015 9.596 15.941 9.391 15.799 9.239ZM14.445 10.5L14.267 13H9.73501L9.55701 10.5H14.445Z"
          fill={secondaryfill}
        />
        <path
          d="M5.46212 4.5C5.3268 5.82014 4.85234 6.81637 4.42082 7.67941L4.36208 7.79677C3.87346 8.77248 3.5 9.51825 3.5 10.5V15.75C3.5 15.8878 3.61221 16 3.75 16H6.30911C6.72332 16 7.05911 16.3358 7.05911 16.75C7.05911 17.1642 6.72332 17.5 6.30911 17.5H3.75C2.78379 17.5 2 16.7162 2 15.75V10.5C2 9.15295 2.52378 8.11237 2.98709 7.19195C3.01812 7.13031 3.04887 7.06921 3.07918 7.00859C3.56954 6.02787 4 5.08695 4 3.75V2.25C4 1.28379 4.78379 0.5 5.75 0.5H7.25C8.21621 0.5 9 1.28379 9 2.25V3.75C9 4.82815 9.28164 5.65164 9.64364 6.43572C9.81727 6.81179 9.65315 7.25741 9.27709 7.43103C8.90102 7.60466 8.4554 7.44054 8.28178 7.06448C7.94666 6.33861 7.64182 5.51525 7.53783 4.5H5.46212Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BottleWater;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudUpload({
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
          d="M6.75 10.5L9 8.25L11.25 10.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25V14.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 14.25H12.5C14.571 14.25 16.25 12.571 16.25 10.5C16.25 8.7639 15.065 7.31791 13.464 6.89111C13.278 4.57711 11.362 2.75 9 2.75C6.515 2.75 4.5 4.7651 4.5 7.25C4.5 7.6001 4.54899 7.93598 4.62399 8.26288C3.02699 8.32998 1.75 9.6369 1.75 11.25C1.75 12.907 3.093 14.25 4.75 14.25H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CloudUpload;

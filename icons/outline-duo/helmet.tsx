import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Helmet({
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
          d="M9 1.75C8.838 1.75 8.674 1.756 8.51 1.769C5.311 2.011 2.768 4.554 2.526 7.753L2.055 13.138C2.022 13.512 2.21 13.871 2.535 14.059L6.249 16.251V10.911L4.749 10.363V7.828L8.574 8.66C8.854 8.721 9.144 8.721 9.424 8.66L13.249 7.828V10.363L11.749 10.911V16.251L15.463 14.059C15.789 13.872 15.976 13.512 15.943 13.138L15.472 7.753C15.23 4.554 12.687 2.011 9.488 1.769C9.324 1.757 9.16 1.75 8.998 1.75H9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75C8.838 1.75 8.674 1.756 8.51 1.769C5.311 2.011 2.768 4.554 2.526 7.753L2.055 13.138C2.022 13.512 2.21 13.871 2.535 14.059L6.249 16.251V10.911L4.749 10.363V7.828L8.574 8.66C8.854 8.721 9.144 8.721 9.424 8.66L13.249 7.828V10.363L11.749 10.911V16.251L15.463 14.059C15.789 13.872 15.976 13.512 15.943 13.138L15.472 7.753C15.23 4.554 12.687 2.011 9.488 1.769C9.324 1.757 9.16 1.75 8.998 1.75H9Z"
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

export default Helmet;

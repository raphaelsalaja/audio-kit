import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MachineWash({
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
          d="M2.75 8.209C2.75675 8.20902 2.76349 8.20902 2.77023 8.209H2.75ZM15.2099 8.209H2.77023C3.9698 8.20602 5.10732 7.67281 5.875 6.75C7.322 8.476 9.893 8.703 11.619 7.256C11.802 7.103 11.972 6.934 12.125 6.75C12.8875 7.66871 14.0166 8.20307 15.2099 8.209ZM15.2357 8.20905C15.2404 8.20904 15.2452 8.20902 15.25 8.209H15.2099C15.2146 8.20902 15.2194 8.20904 15.2242 8.20905H2.31L2.79145 12.695C2.88672 13.5828 3.63501 14.2565 4.52783 14.2583L13.4494 14.2768C14.3399 14.2786 15.0897 13.6115 15.1915 12.7269L15.7115 8.20905H15.2357Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.75 8.209C3.957 8.212 5.103 7.678 5.875 6.75C7.322 8.476 9.893 8.703 11.619 7.256C11.802 7.103 11.972 6.934 12.125 6.75C12.896 7.679 14.042 8.215 15.25 8.209"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 3.75L15.21 12.486C15.09 13.492 14.237 14.25 13.224 14.25H4.776C3.763 14.25 2.91 13.492 2.79 12.486L1.75 3.75"
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

export default MachineWash;

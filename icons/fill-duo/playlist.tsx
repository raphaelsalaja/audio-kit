import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Playlist({
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
          d="M1.5 6.75C1.5 5.23079 2.73079 4 4.25 4H13.75C15.2692 4 16.5 5.23079 16.5 6.75V13.25C16.5 14.7692 15.2692 16 13.75 16H4.25C2.73079 16 1.5 14.7692 1.5 13.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 8.16799C6.5 7.25683 7.48865 6.69165 8.2742 7.14875C9.32098 7.75948 10.3692 8.36795 11.4155 8.97949C12.1948 9.43503 12.1948 10.562 11.4155 11.0175L8.27588 12.8493L8.27495 12.8498C7.48731 13.31 6.5 12.7411 6.5 11.831V8.16799Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 1.75C4 1.33579 4.33579 1 4.75 1H13.25C13.6642 1 14 1.33579 14 1.75C14 2.16421 13.6642 2.5 13.25 2.5H4.75C4.33579 2.5 4 2.16421 4 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Playlist;

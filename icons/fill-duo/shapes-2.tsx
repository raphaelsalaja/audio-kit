import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shapes2({
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
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H6.25C7.21621 2 8 2.78379 8 3.75V6.25C8 7.21621 7.21621 8 6.25 8H3.75C2.78379 8 2 7.21621 2 6.25V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.75 13C1.75 11.2048 3.20479 9.75 5 9.75C6.79521 9.75 8.25 11.2048 8.25 13C8.25 14.7952 6.79521 16.25 5 16.25C3.20479 16.25 1.75 14.7952 1.75 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.75 10.5C13.75 10.0858 13.4142 9.75 13 9.75C12.5858 9.75 12.25 10.0858 12.25 10.5V12.25H10.5C10.0858 12.25 9.75 12.5858 9.75 13C9.75 13.4142 10.0858 13.75 10.5 13.75H12.25V15.5C12.25 15.9142 12.5858 16.25 13 16.25C13.4142 16.25 13.75 15.9142 13.75 15.5V13.75H15.5C15.9142 13.75 16.25 13.4142 16.25 13C16.25 12.5858 15.9142 12.25 15.5 12.25H13.75V10.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.0817 2.20136L16.3475 6.12493C16.827 6.95657 16.2287 7.99999 15.265 7.99999H10.734C9.77029 7.99999 9.17177 6.95701 9.65128 6.12537L11.8992 2.23261C11.9046 2.22209 11.9103 2.21167 11.9163 2.20136C12.3968 1.368 13.601 1.36829 14.0817 2.20136Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Shapes2;

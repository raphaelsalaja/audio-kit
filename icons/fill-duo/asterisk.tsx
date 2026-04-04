import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Asterisk({
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
          d="M8.99997 9.86605L14.4708 13.0248C14.8295 13.2319 15.2882 13.109 15.4953 12.7503C15.7024 12.3916 15.5796 11.9329 15.2208 11.7258L10.5 9.00004L8.99997 9.86605Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9.00003 8.13394L3.5292 4.97518C3.17048 4.76806 2.71179 4.89095 2.50467 5.24967C2.29756 5.60838 2.42045 6.06708 2.77917 6.27419L7.50005 8.99996L9.00003 8.13394Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M15.4952 5.24998C15.7023 5.6087 15.5794 6.0674 15.2207 6.2745L3.52932 13.0245C3.1706 13.2316 2.7119 13.1087 2.5048 12.75C2.29769 12.3913 2.4206 11.9326 2.77932 11.7255L14.4707 4.97546C14.8294 4.76836 15.2881 4.89126 15.4952 5.24998Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.99983 1.49973C9.41404 1.49972 9.74984 1.83549 9.74985 2.24971L9.75018 15.7503C9.75019 16.1645 9.41441 16.5003 9.0002 16.5003C8.58599 16.5003 8.25019 16.1645 8.25018 15.7503L8.24985 2.24975C8.24984 1.83553 8.58562 1.49974 8.99983 1.49973Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Asterisk;

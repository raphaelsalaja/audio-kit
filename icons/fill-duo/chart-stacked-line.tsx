import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartStackedLine({
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
          d="M16.4033 2.11827C16.7522 2.34154 16.854 2.80536 16.6307 3.15425L12.9307 8.93625C12.5316 9.55989 11.6784 9.70427 11.097 9.23827V9.23827L7.26314 6.1706L5.84311 9.08181C5.66151 9.45409 5.2125 9.60868 4.84022 9.42708C4.46793 9.24549 4.31335 8.79648 4.49494 8.4242L6.0515 5.23311V5.23311C6.403 4.51103 7.333 4.30551 7.95654 4.80435L11.8172 7.89346L15.3673 2.34575C15.5905 1.99685 16.0544 1.89501 16.4033 2.11827Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.03587 11.0759C4.40816 11.2575 4.56276 11.7065 4.38118 12.0788L2.67408 15.5788C2.4925 15.9511 2.04349 16.1057 1.6712 15.9241C1.29891 15.7425 1.14431 15.2935 1.32589 14.9212L3.03299 11.4212C3.21458 11.0489 3.66358 10.8943 4.03587 11.0759Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.25 8.75C1.25 8.33579 1.58579 8 2 8H5.171C5.35637 8 5.53517 8.06865 5.67291 8.1927L11.0293 13.0167L15.5314 9.41439C15.8549 9.1556 16.3268 9.20801 16.5856 9.53143C16.8444 9.85486 16.792 10.3268 16.4686 10.5856L11.8009 14.3204C11.3228 14.7034 10.6377 14.6829 10.1829 14.2732L4.88305 9.5H2C1.58579 9.5 1.25 9.16421 1.25 8.75ZM10.8634 13.1494C10.8634 13.1494 10.8635 13.1494 10.8635 13.1493L10.8634 13.1494ZM11.1867 13.1585C11.1868 13.1586 11.1869 13.1587 11.1871 13.1588L11.1869 13.1587L11.1867 13.1585Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartStackedLine;

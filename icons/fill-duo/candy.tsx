import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Candy({
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
          d="M5.74717 4.88468C7.71833 2.88585 10.9366 2.86345 12.9354 4.83459L13.1091 5.00577C15.1078 6.9769 15.1305 10.1954 13.1592 12.1942L12.252 13.1141C10.2809 15.1129 7.06258 15.1354 5.06376 13.1641L4.89006 12.9928C2.89124 11.0217 2.86884 7.8034 4.83998 5.80459L5.74717 4.88468Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 3.83876C12.0186 4.07848 12.5052 4.41037 12.9354 4.83459L13.1091 5.00577C13.5594 5.44992 13.9095 5.95741 14.159 6.5H15.891C16.5871 6.5 17.0749 5.79914 16.8348 5.14692C16.1373 3.25631 14.7438 1.78797 12.82 1.14111C12.1529 0.917344 11.5 1.43403 11.5 2.095V3.83876Z"
          fill={fill}
        />
        <path
          d="M3.84077 11.5H2.09501C1.43409 11.5 0.91715 12.1523 1.14093 12.8195C1.75364 14.6418 3.02334 16.0492 5.14576 16.8344C5.78948 17.0719 6.50001 16.5774 6.50001 15.891V14.1604C5.98113 13.9206 5.49418 13.5886 5.06376 13.1641L4.89006 12.9928C4.44006 12.549 4.09023 12.0421 3.84077 11.5Z"
          fill={fill}
        />
        <path
          d="M6.5 14.1604V4.25489C6.96596 3.93605 7.47343 3.70336 8 3.55696V14.5887C7.48571 14.5246 6.97924 14.3818 6.5 14.1604Z"
          fill={fill}
        />
        <path
          d="M10 14.4416V3.41017C10.5143 3.47441 11.0208 3.61723 11.5 3.83876V13.7434C11.0341 14.0623 10.5266 14.2951 10 14.4416Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Candy;

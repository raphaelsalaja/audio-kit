import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSmileClosedEyes({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 13.7507C7.8247 13.7507 6.74661 13.156 6.11621 12.1594C5.89451 11.8098 5.999 11.3464 6.3491 11.1247C6.6972 10.9035 7.1626 11.007 7.3838 11.3576C7.7378 11.9167 8.3418 12.2507 9 12.2507C9.6582 12.2507 10.2622 11.9167 10.6162 11.3576C10.8374 11.007 11.3003 10.9035 11.6509 11.1247C12.001 11.3464 12.1055 11.8098 11.8838 12.1594C11.2534 13.156 10.1753 13.7507 9 13.7507Z"
          fill={fill}
        />
        <path
          d="M7.25 9.7507C6.8359 9.7507 6.5 9.4148 6.5 9.0007C6.5 8.7248 6.2759 8.5007 6 8.5007C5.7241 8.5007 5.5 8.7248 5.5 9.0007C5.5 9.4148 5.1641 9.7507 4.75 9.7507C4.3359 9.7507 4 9.4148 4 9.0007C4 7.8977 4.897 7.0007 6 7.0007C7.103 7.0007 8 7.8977 8 9.0007C8 9.4148 7.6641 9.7507 7.25 9.7507Z"
          fill={fill}
        />
        <path
          d="M13.25 9.7507C12.8359 9.7507 12.5 9.4148 12.5 9.0007C12.5 8.7248 12.2759 8.5007 12 8.5007C11.7241 8.5007 11.5 8.7248 11.5 9.0007C11.5 9.4148 11.1641 9.7507 10.75 9.7507C10.3359 9.7507 10 9.4148 10 9.0007C10 7.8977 10.897 7.0007 12 7.0007C13.103 7.0007 14 7.8977 14 9.0007C14 9.4148 13.6641 9.7507 13.25 9.7507Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSmileClosedEyes;

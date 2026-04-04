import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSmile2({
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
          d="M9 13.7507C7.8247 13.7507 6.74661 13.156 6.11621 12.1594C5.89451 11.8098 5.999 11.3464 6.3491 11.1247C6.6982 10.9035 7.1626 11.007 7.3838 11.3576C7.7378 11.9167 8.3418 12.2507 9 12.2507C9.6582 12.2507 10.2622 11.9167 10.6162 11.3576C10.8374 11.007 11.3013 10.9035 11.6509 11.1247C12.001 11.3464 12.1055 11.8098 11.8838 12.1594C11.2534 13.156 10.1753 13.7507 9 13.7507Z"
          fill={fill}
        />
        <path
          d="M6 10.0007C6.5523 10.0007 7 9.5527 7 9.0007C7 8.4487 6.5523 8.0007 6 8.0007C5.4477 8.0007 5 8.4487 5 9.0007C5 9.5527 5.4477 10.0007 6 10.0007Z"
          fill={fill}
        />
        <path
          d="M12 10.0007C12.5523 10.0007 13 9.5527 13 9.0007C13 8.4487 12.5523 8.0007 12 8.0007C11.4477 8.0007 11 8.4487 11 9.0007C11 9.5527 11.4477 10.0007 12 10.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSmile2;

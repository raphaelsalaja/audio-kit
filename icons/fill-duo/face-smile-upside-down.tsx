import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSmileUpsideDown({
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
          d="M11.2505 6.9929C11.002 6.9929 10.7588 6.8694 10.6162 6.6438C10.2622 6.0847 9.65821 5.7507 9.00001 5.7507C8.34181 5.7507 7.73781 6.0847 7.38381 6.6438C7.16211 6.9939 6.69921 7.0969 6.34911 6.8767C5.99901 6.655 5.8945 6.1916 6.1162 5.842C6.7466 4.8454 7.82471 4.2507 9.00001 4.2507C10.1753 4.2507 11.2534 4.8454 11.8838 5.842C12.1055 6.1916 12.001 6.655 11.6509 6.8767C11.5269 6.9553 11.3877 6.9929 11.2505 6.9929Z"
          fill={fill}
        />
        <path
          d="M12 10.0007C12.552 10.0007 13 9.5527 13 9.0007C13 8.4487 12.552 8.0007 12 8.0007C11.448 8.0007 11 8.4487 11 9.0007C11 9.5527 11.448 10.0007 12 10.0007Z"
          fill={fill}
        />
        <path
          d="M6 10.0007C6.552 10.0007 7 9.5527 7 9.0007C7 8.4487 6.552 8.0007 6 8.0007C5.448 8.0007 5 8.4487 5 9.0007C5 9.5527 5.448 10.0007 6 10.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSmileUpsideDown;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Molecule({
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
          d="M6 8.99982C6 7.34295 7.34313 5.99982 9 5.99982C10.6569 5.99982 12 7.34295 12 8.99982C12 10.6567 10.6569 11.9998 9 11.9998C7.34313 11.9998 6 10.6567 6 8.99982Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 5.5C14.3284 5.5 15 4.8284 15 4C15 3.1716 14.3284 2.5 13.5 2.5C12.6716 2.5 12 3.1716 12 4C12 4.8284 12.6716 5.5 13.5 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.0208 5.44531C4.81177 5.50948 4.58977 5.54401 4.35972 5.54401C3.11712 5.54401 2.10972 4.53661 2.10972 3.29401C2.10972 2.05141 3.11712 1.04401 4.35972 1.04401C5.60232 1.04401 6.60972 2.05141 6.60972 3.29401C6.60972 3.75878 6.46878 4.19066 6.22731 4.54922L7.70028 6.2952C7.24107 6.51628 6.84681 6.85086 6.55389 7.26256L5.0208 5.44531Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.07459 12.5716L6.57693 10.769C6.87502 11.1766 7.27347 11.5061 7.73591 11.7213L6.25704 13.4957C6.48031 13.8451 6.60972 14.2602 6.60972 14.7056C6.60972 15.9482 5.60232 16.9556 4.35972 16.9556C3.11712 16.9556 2.10972 15.9482 2.10972 14.7056C2.10972 13.463 3.11712 12.4556 4.35972 12.4556C4.60962 12.4556 4.85 12.4963 5.07459 12.5716Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5551 12.9309L10.7546 11.4335C11.164 11.1378 11.4959 10.7413 11.7138 10.2803L13.4965 11.7629C13.8399 11.5506 14.2446 11.428 14.678 11.428C15.9206 11.428 16.928 12.4354 16.928 13.678C16.928 14.9206 15.9206 15.928 14.678 15.928C13.4354 15.928 12.428 14.9206 12.428 13.678C12.428 13.4161 12.4728 13.1646 12.5551 12.9309Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Molecule;

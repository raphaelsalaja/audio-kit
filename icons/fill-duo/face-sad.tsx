import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSad({
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
          d="M12 12.7438C11.8086 12.7438 11.6162 12.6706 11.4697 12.5241C10.1494 11.2048 7.85061 11.2048 6.53021 12.5241C6.23721 12.818 5.76259 12.8161 5.46969 12.5241C5.17669 12.2311 5.17669 11.756 5.46969 11.4636C6.41399 10.5202 7.66699 10.0007 8.99999 10.0007C10.333 10.0007 11.5859 10.5202 12.5303 11.4636C12.8233 11.7561 12.8233 12.2312 12.5303 12.5241C12.3838 12.6706 12.1924 12.7438 12 12.7438Z"
          fill={fill}
        />
        <path
          d="M7 9.0007C7.552 9.0007 8 8.553 8 8.0007C8 7.4484 7.552 7.0007 7 7.0007C6.448 7.0007 6 7.4484 6 8.0007C6 8.553 6.448 9.0007 7 9.0007Z"
          fill={fill}
        />
        <path
          d="M11 9.0007C11.552 9.0007 12 8.553 12 8.0007C12 7.4484 11.552 7.0007 11 7.0007C10.448 7.0007 10 7.4484 10 8.0007C10 8.553 10.448 9.0007 11 9.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSad;

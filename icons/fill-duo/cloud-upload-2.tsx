import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudUpload2({
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
          d="M14.146 5.82703C13.704 3.36403 11.535 1.5 9 1.5C6.105 1.5 3.75 3.855 3.75 6.75C3.75 6.878 3.755 7.00801 3.767 7.14001C2.163 7.57101 1 9.025 1 10.75C1 12.818 2.682 14.5 4.75 14.5H12.5C14.981 14.5 17 12.481 17 10C17 8.146 15.85 6.49703 14.146 5.82703Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.21969 11.0303C6.51269 11.3233 6.98729 11.3233 7.28019 11.0303L8.24989 10.0606V17.2501C8.24989 17.6642 8.58579 18.0001 8.99989 18.0001C9.41399 18.0001 9.74989 17.6642 9.74989 17.2501V10.0606L10.7196 11.0303C11.0126 11.3233 11.4872 11.3233 11.7801 11.0303C12.073 10.7373 12.0731 10.2627 11.7801 9.96979L9.5301 7.71979C9.3836 7.57329 9.19169 7.50012 8.99979 7.50012C8.80789 7.50012 8.61599 7.57329 8.46949 7.71979L6.21949 9.96979C5.92649 10.2628 5.92669 10.7374 6.21969 11.0303Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudUpload2;

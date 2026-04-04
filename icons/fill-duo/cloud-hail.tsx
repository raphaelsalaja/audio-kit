import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudHail({
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
          d="M14.157 6.326C12.633 5.724 10.7083 6 9.12499 7.3958C9.37499 6.125 11.4118 4.5058 13.523 4.608C12.61 3.047 10.922 2 9.02899 2C6.14399 2 3.79799 4.355 3.79799 7.25C3.79799 7.375 3.80299 7.5 3.81399 7.627C2.16899 8.045 0.96499 9.561 1.00199 11.334C1.02299 12.334 1.43099 13.265 2.14999 13.958C2.84999 14.632 3.76299 15 4.71499 15H12.516C14.989 15 17 12.982 17 10.499C16.997 8.64 15.869 7.003 14.157 6.326Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.75 17C12.164 17 12.5 16.6642 12.5 16.25C12.5 15.8358 12.164 15.5 11.75 15.5C11.336 15.5 11 15.8358 11 16.25C11 16.6642 11.336 17 11.75 17Z"
          fill={fill}
        />
        <path
          d="M6.25 17C6.664 17 7 16.6642 7 16.25C7 15.8358 6.664 15.5 6.25 15.5C5.836 15.5 5.5 15.8358 5.5 16.25C5.5 16.6642 5.836 17 6.25 17Z"
          fill={fill}
        />
        <path
          d="M9 15.5C9.414 15.5 9.75 15.1642 9.75 14.75C9.75 14.3358 9.414 14 9 14C8.586 14 8.25 14.3358 8.25 14.75C8.25 15.1642 8.586 15.5 9 15.5Z"
          fill={fill}
        />
        <path
          d="M11.75 14C12.164 14 12.5 13.6642 12.5 13.25C12.5 12.8358 12.164 12.5 11.75 12.5C11.336 12.5 11 12.8358 11 13.25C11 13.6642 11.336 14 11.75 14Z"
          fill={fill}
        />
        <path
          d="M6.25 14C6.664 14 7 13.6642 7 13.25C7 12.8358 6.664 12.5 6.25 12.5C5.836 12.5 5.5 12.8358 5.5 13.25C5.5 13.6642 5.836 14 6.25 14Z"
          fill={fill}
        />
        <path
          d="M9 12.5C9.414 12.5 9.75 12.1642 9.75 11.75C9.75 11.3358 9.414 11 9 11C8.586 11 8.25 11.3358 8.25 11.75C8.25 12.1642 8.586 12.5 9 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudHail;

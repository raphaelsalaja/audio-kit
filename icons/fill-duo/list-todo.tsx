import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListTodo({
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
          d="M10.2501 6H16.2501C16.6642 6 17.0001 5.6641 17.0001 5.25C17.0001 4.8359 16.6642 4.5 16.2501 4.5H10.2501C9.83602 4.5 9.50012 4.8359 9.50012 5.25C9.50012 5.6641 9.83602 6 10.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 12H10.2501C9.83602 12 9.50012 12.3359 9.50012 12.75C9.50012 13.1641 9.83602 13.5 10.2501 13.5H16.2501C16.6642 13.5 17.0001 13.1641 17.0001 12.75C17.0001 12.3359 16.6642 12 16.2501 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75012 2H3.25012C2.28362 2 1.50012 2.7835 1.50012 3.75V6.25C1.50012 7.2165 2.28362 8 3.25012 8H5.75012C6.71662 8 7.50012 7.2165 7.50012 6.25V3.75C7.50012 2.7835 6.71662 2 5.75012 2Z"
          fill={fill}
        />
        <path
          d="M6.4112 9.87596L3.5352 13.6157L2.78031 12.8608C2.48731 12.5678 2.0127 12.5678 1.7198 12.8608C1.4269 13.1538 1.4268 13.6284 1.7198 13.9213L3.07871 15.2802C3.21981 15.4213 3.41069 15.4999 3.60899 15.4999C3.62509 15.4999 3.64121 15.4994 3.65781 15.4984C3.87311 15.4842 4.07191 15.3783 4.20371 15.2069L7.60069 10.7899C7.85309 10.4618 7.7916 9.99109 7.463 9.73809C7.1354 9.48709 6.6642 9.54686 6.4112 9.87596Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ListTodo;

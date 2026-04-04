import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid4x4({
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
          d="M15.7501 9.75H2.25009C1.83599 9.75 1.50009 9.4141 1.50009 9C1.50009 8.5859 1.83599 8.25 2.25009 8.25H15.7501C16.1642 8.25 16.5001 8.5859 16.5001 9C16.5001 9.4141 16.1642 9.75 15.7501 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 13.5H2.25009C1.83599 13.5 1.50009 13.1641 1.50009 12.75C1.50009 12.3359 1.83599 12 2.25009 12H15.7501C16.1642 12 16.5001 12.3359 16.5001 12.75C16.5001 13.1641 16.1642 13.5 15.7501 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 6H2.25009C1.83599 6 1.50009 5.6641 1.50009 5.25C1.50009 4.8359 1.83599 4.5 2.25009 4.5H15.7501C16.1642 4.5 16.5001 4.8359 16.5001 5.25C16.5001 5.6641 16.1642 6 15.7501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 16.5C8.58599 16.5 8.25009 16.1641 8.25009 15.75V2.25C8.25009 1.8359 8.58599 1.5 9.00009 1.5C9.41419 1.5 9.75009 1.8359 9.75009 2.25V15.75C9.75009 16.1641 9.41419 16.5 9.00009 16.5Z"
          fill={fill}
        />
        <path
          d="M12.7501 16.5C12.336 16.5 12.0001 16.1641 12.0001 15.75V2.25C12.0001 1.8359 12.336 1.5 12.7501 1.5C13.1642 1.5 13.5001 1.8359 13.5001 2.25V15.75C13.5001 16.1641 13.1642 16.5 12.7501 16.5Z"
          fill={fill}
        />
        <path
          d="M5.25009 16.5C4.83599 16.5 4.50009 16.1641 4.50009 15.75V2.25C4.50009 1.8359 4.83599 1.5 5.25009 1.5C5.66419 1.5 6.00009 1.8359 6.00009 2.25V15.75C6.00009 16.1641 5.66419 16.5 5.25009 16.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Grid4x4;

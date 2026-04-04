import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeDashed({
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
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.4277 3.3967C9.97907 3.3022 9.50347 3.25 8.99997 3.25C8.49647 3.25 8.02087 3.3022 7.57227 3.3967"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.59241 5.7576C4.03861 5.2786 4.56019 4.81329 5.16119 4.41629"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.0443 10.1133C1.6519 9.42061 1.6519 8.57951 2.0443 7.88681"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.4077 5.7576C13.9615 5.2786 13.4399 4.81329 12.8389 4.41629"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.4277 14.6033C9.97907 14.6978 9.50347 14.75 8.99997 14.75C8.49647 14.75 8.02087 14.6978 7.57227 14.6033"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.59241 12.2424C4.03861 12.7214 4.56019 13.1867 5.16119 13.5837"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.4077 12.2424C13.9615 12.7214 13.4399 13.1867 12.8389 13.5837"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.9557 10.1133C16.3481 9.42061 16.3481 8.57951 15.9557 7.88681"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EyeDashed;

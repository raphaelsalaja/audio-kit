import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDots({
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
          d="M13.2501 2H4.75009C3.23131 2 2.00009 3.23122 2.00009 4.75V13.25C2.00009 14.7688 3.23131 16 4.75009 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00009 10C9.55238 10 10.0001 9.55228 10.0001 9C10.0001 8.44772 9.55238 8 9.00009 8C8.44781 8 8.00009 8.44772 8.00009 9C8.00009 9.55228 8.44781 10 9.00009 10Z"
          fill={fill}
        />
        <path
          d="M12.5001 10C13.0524 10 13.5001 9.55228 13.5001 9C13.5001 8.44772 13.0524 8 12.5001 8C11.9478 8 11.5001 8.44772 11.5001 9C11.5001 9.55228 11.9478 10 12.5001 10Z"
          fill={fill}
        />
        <path
          d="M5.50009 10C6.05238 10 6.50009 9.55228 6.50009 9C6.50009 8.44772 6.05238 8 5.50009 8C4.94781 8 4.50009 8.44772 4.50009 9C4.50009 9.55228 4.94781 10 5.50009 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareDots;

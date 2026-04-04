import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareRight2({
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
          d="M11.75 3.5H4.75C3.233 3.5 2 4.733 2 6.25V13.25C2 14.767 3.233 16 4.75 16H11.75C13.267 16 14.5 14.767 14.5 13.25V6.25C14.5 4.733 13.267 3.5 11.75 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.265 1.20494C12.047 0.999939 11.729 0.943018 11.453 1.06102C11.178 1.18002 11 1.45098 11 1.74998V3.78294C6.277 4.20494 5 8.61498 5 11C5 11.329 5.215 11.6189 5.529 11.7159C5.602 11.7379 5.676 11.75 5.75 11.75C5.993 11.75 6.227 11.631 6.37 11.423C6.39 11.394 8.238 8.73794 11 8.30894V10.251C11 10.55 11.178 10.8209 11.453 10.9399C11.729 11.0589 12.047 11.002 12.265 10.796L16.765 6.546C16.915 6.404 17 6.20696 17 6.00096C17 5.79496 16.915 5.59704 16.765 5.45604L12.265 1.20494Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareRight2;

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggle2({
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
          d="M11.5001 15H6.50012C3.19152 15 0.500122 12.3086 0.500122 9C0.500122 5.6914 3.19152 3 6.50012 3H11.5001C14.8087 3 17.5001 5.6914 17.5001 9C17.5001 12.3086 14.8087 15 11.5001 15Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.50012 12C4.84582 12 3.50012 10.6543 3.50012 9C3.50012 7.3457 4.84582 6 6.50012 6C8.15442 6 9.50012 7.3457 9.50012 9C9.50012 10.6543 8.15442 12 6.50012 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Toggle2;

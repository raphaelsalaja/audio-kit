import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Paperclip2({
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
          d="M10.985,5.422l-4.773,4.773c-.586,.586-.586,1.536,0,2.121h0c.586,.586,1.536,.586,2.121,0l4.95-4.95c1.172-1.172,1.172-3.071,0-4.243h0c-1.172-1.172-3.071-1.172-4.243,0l-4.95,4.95c-1.757,1.757-1.757,4.607,0,6.364h0c1.757,1.757,4.607,1.757,6.364,0l4.773-4.773"
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

export default Paperclip2;

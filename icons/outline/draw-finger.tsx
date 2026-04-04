import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawFinger({
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
          d="m17.25,15.225c0-2.059-.236-3.639-1-4.223-.875-.669-3.152-.838-5.295-.232l-1.33-2.827c-.293-.626-1.037-.896-1.663-.603-.625.292-.896,1.036-.604,1.661l2.561,5.456-2.724-.501c-.587-.108-1.167.224-1.371.785-.232.637.098,1.34.736,1.569l2.616.941"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.25,1.75h2.5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5H4.25c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DrawFinger;

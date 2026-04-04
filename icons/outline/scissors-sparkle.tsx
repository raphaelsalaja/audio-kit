import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScissorsSparkle({
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
          d="m13.5135,7.75h2.7365"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4,7.75h5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4,7.75c1.243,0,2.25-1.007,2.25-2.25s-1.007-2.25-2.25-2.25-2.25,1.007-2.25,2.25,1.007,2.25,2.25,2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.409,11.659L14,3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7,15.5c1.243,0,2.25-1.007,2.25-2.25s-1.007-2.25-2.25-2.25-2.25,1.007-2.25,2.25,1.007,2.25,2.25,2.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.157,12.0075l-1.262-.43-.421-1.27c-.137-.41-.812-.41-.949,0l-.421,1.27-1.262.43c-.204.06-.342.26-.342.47,0,.22.138.41.342.48l1.262.42.421,1.28c.068.2.26.34.475.34s.406-.14.475-.34l.421-1.28,1.262-.42c.204-.07.342-.26.342-.48,0-.21-.139-.41-.343-.47Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ScissorsSparkle;

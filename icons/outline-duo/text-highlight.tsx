import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextHighlight({
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
          d="M9.789 12.123L4.905 9.657C4.366 9.385 4.189 8.7 4.53 8.201L8.296 2.678C8.861 1.849 9.95401 1.567 10.85 2.019L12.407 2.805C13.303 3.257 13.725 4.304 13.393 5.251L11.185 11.56C10.985 12.13 10.33 12.395 9.79 12.122L9.789 12.123Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.54501 15.25H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.789 12.123L4.905 9.657C4.366 9.385 4.189 8.7 4.53 8.201L8.296 2.678C8.861 1.849 9.95401 1.567 10.85 2.019L12.407 2.805C13.303 3.257 13.725 4.304 13.393 5.251L11.185 11.56C10.985 12.13 10.33 12.395 9.79 12.122L9.789 12.123Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.023 12.245C8.029 12.761 7.058 14.234 6.771 14.804L5.655 14.241L4.539 13.678C4.827 13.108 5.435 11.452 4.667 9.542"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.77 14.804L6.545 15.25H3.75L4.539 13.677"
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

export default TextHighlight;

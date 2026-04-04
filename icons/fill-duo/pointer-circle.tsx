import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PointerCircle({
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
          d="M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5925 5.29281C5.77877 5.05338 5.01505 5.8458 5.31354 6.66326L7.65057 13.0604C7.99492 13.996 9.33397 13.9754 9.63936 13.0196L10.4586 10.4596L13.0186 9.64032C13.9663 9.33595 14.0055 7.99585 13.0579 7.651L6.6624 5.31456C6.63931 5.30612 6.61599 5.29888 6.5925 5.29281Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PointerCircle;

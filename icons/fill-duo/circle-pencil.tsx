import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CirclePencil({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.2392 15.7858C12.0101 16.5552 10.557 17 8.99999 17C7.44254 17 5.98903 16.5549 4.7597 15.7851L5.60669 11.4172C5.76608 10.5939 6.4872 10 7.32503 10H10.675C11.5129 10 12.2339 10.5939 12.3933 11.4172L13.2392 15.7858Z"
          fill={fill}
        />
        <path
          d="M9.71519 5.27415C9.61666 4.96213 9.32721 4.75 9 4.75C8.67279 4.75 8.38335 4.96213 8.28482 5.27415L7.3497 8.23534C7.30854 8.36568 7.40735 8.498 7.54402 8.49594C8.5139 8.48131 9.48612 8.48132 10.456 8.49594C10.5927 8.498 10.6915 8.36568 10.6503 8.23534L9.71519 5.27415Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CirclePencil;

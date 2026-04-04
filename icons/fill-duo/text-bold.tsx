import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextBold({
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
          d="M5.75 1.5C5.33579 1.5 5 1.83579 5 2.25C5 2.66421 5.33579 3 5.75 3H10C11.38 3 12.5 4.12346 12.5 5.5C12.5 6.87654 11.38 8 10 8H6.75H5.75C5.33579 8 5 8.33579 5 8.75C5 9.16421 5.33579 9.5 5.75 9.5H6.75H10H10.75C12.2684 9.5 13.5 10.7337 13.5 12.25C13.5 13.7663 12.2684 15 10.75 15H5.75C5.33579 15 5 15.3358 5 15.75C5 16.1642 5.33579 16.5 5.75 16.5H10.75C13.0976 16.5 15 14.5939 15 12.25C15 10.6013 14.0588 9.16921 12.6834 8.46474C13.4921 7.73196 14 6.67371 14 5.5C14 3.29654 12.21 1.5 10 1.5H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 3.25C3 2.28676 3.78281 1.5 4.75 1.5H6V16.5H4.75C3.78281 16.5 3 15.7132 3 14.75V3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextBold;

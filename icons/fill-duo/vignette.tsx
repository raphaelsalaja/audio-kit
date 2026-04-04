import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vignette({
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
          d="M1 4.75C1 3.23079 2.23079 2 3.75 2H14.25C15.7692 2 17 3.23079 17 4.75V13.25C17 14.7692 15.7692 16 14.25 16H3.75C2.23079 16 1 14.7692 1 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.53934 6.10613C6.45044 5.40944 7.6765 5 9 5C10.3235 5 11.5496 5.40944 12.4607 6.10613C13.3724 6.80335 14 7.81974 14 9C14 10.1803 13.3724 11.1966 12.4607 11.8939C11.5496 12.5906 10.3235 13 9 13C7.6765 13 6.45044 12.5906 5.53934 11.8939C4.62755 11.1966 4 10.1803 4 9C4 7.81974 4.62755 6.80335 5.53934 6.10613Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Vignette;

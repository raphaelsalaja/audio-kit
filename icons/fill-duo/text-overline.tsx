import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextOverline({
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
          d="M8.69503 5C8.38548 5 8.10774 5.19017 7.99579 5.47877L4.31079 14.9788C4.16099 15.3649 4.35262 15.7994 4.7388 15.9492C5.12498 16.099 5.55947 15.9074 5.70927 15.5212L6.49329 13.5H11.5068L12.2908 15.5212C12.4406 15.9074 12.8751 16.099 13.2612 15.9492C13.6474 15.7994 13.8391 15.3649 13.6893 14.9788L10.0042 5.47877C9.8923 5.19017 9.61455 5 9.30501 5H8.69503ZM10.9249 12L9.00002 7.03761L7.07513 12H10.9249Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 2.75C2 2.33579 2.33579 2 2.75 2H15.25C15.6642 2 16 2.33579 16 2.75C16 3.16421 15.6642 3.5 15.25 3.5H2.75C2.33579 3.5 2 3.16421 2 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextOverline;

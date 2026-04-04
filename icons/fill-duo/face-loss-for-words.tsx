import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceLossForWords({
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
          d="M9 17.0007C4.5889 17.0007 1 13.4118 1 9.0007C1 4.5896 4.5889 1.0007 9 1.0007C13.4111 1.0007 17 4.5896 17 9.0007C17 13.4118 13.4111 17.0007 9 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6 10.0007C6.552 10.0007 7 9.553 7 9.0007C7 8.4484 6.552 8.0007 6 8.0007C5.448 8.0007 5 8.4484 5 9.0007C5 9.553 5.448 10.0007 6 10.0007Z"
          fill={fill}
        />
        <path
          d="M12 10.0007C12.552 10.0007 13 9.553 13 9.0007C13 8.4484 12.552 8.0007 12 8.0007C11.448 8.0007 11 8.4484 11 9.0007C11 9.553 11.448 10.0007 12 10.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceLossForWords;

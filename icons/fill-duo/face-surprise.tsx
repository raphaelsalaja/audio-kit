import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSurprise({
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
          d="M9 13.5007C10.104 13.5007 11 12.6047 11 11.5007C11 10.3967 10.104 9.5007 9 9.5007C7.896 9.5007 7 10.3967 7 11.5007C7 12.6047 7.896 13.5007 9 13.5007Z"
          fill={fill}
        />
        <path
          d="M6 9.0007C6.552 9.0007 7 8.5527 7 8.0007C7 7.4487 6.552 7.0007 6 7.0007C5.448 7.0007 5 7.4487 5 8.0007C5 8.5527 5.448 9.0007 6 9.0007Z"
          fill={fill}
        />
        <path
          d="M12 9.0007C12.552 9.0007 13 8.5527 13 8.0007C13 7.4487 12.552 7.0007 12 7.0007C11.448 7.0007 11 7.4487 11 8.0007C11 8.5527 11.448 9.0007 12 9.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSurprise;

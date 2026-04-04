import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSpeechlessSweat({
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
          d="M6 10.5007C6.552 10.5007 7 10.0527 7 9.5007C7 8.9487 6.552 8.5007 6 8.5007C5.448 8.5007 5 8.9487 5 9.5007C5 10.0527 5.448 10.5007 6 10.5007Z"
          fill={fill}
        />
        <path
          d="M12 10.5007C12.552 10.5007 13 10.0527 13 9.5007C13 8.9487 12.552 8.5007 12 8.5007C11.448 8.5007 11 8.9487 11 9.5007C11 10.0527 11.448 10.5007 12 10.5007Z"
          fill={fill}
        />
        <path
          d="M10.25 13.0007H7.75C7.3359 13.0007 7 12.6648 7 12.2507C7 11.8366 7.3359 11.5007 7.75 11.5007H10.25C10.6641 11.5007 11 11.8366 11 12.2507C11 12.6648 10.6641 13.0007 10.25 13.0007Z"
          fill={fill}
        />
        <path
          d="M13 9.0007H5C4.5859 9.0007 4.25 8.6648 4.25 8.2507C4.25 7.8366 4.5859 7.5007 5 7.5007H13C13.4141 7.5007 13.75 7.8366 13.75 8.2507C13.75 8.6648 13.4141 9.0007 13 9.0007Z"
          fill={fill}
        />
        <path
          d="M15.8447 0.185201C15.5635 -0.0608994 15.1416 -0.0608994 14.8603 0.185201C14.6396 0.377101 12.706 2.1115 12.706 3.8488C12.706 5.3112 13.8935 6.5007 15.3525 6.5007C16.8125 6.5007 18 5.3112 18 3.8488C18 2.1125 16.0654 0.377101 15.8447 0.185201Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FaceSpeechlessSweat;
